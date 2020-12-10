//eslint-disable-next-line
const faker = require("faker");
enum Role {
  Admin = "Admin",
  Member = "Member"
}

const COLORS = [
  "#EF4444",
  "#3B82F6",
  "#F59E0B",
  "#6366F1",
  "#10B981",
  "#EC4899",
  "#8B5CF6"
];

console.log(faker);
const getArrayRecords = (count = 1, factory: (i: number) => any) =>
  [...Array(count).keys()].map(factory);

const randomCountry = () => faker.address.country();
const randomCountries = (count: number) =>
  getArrayRecords(count, randomCountry);

const randomInt = (min = 1, max = 20) => faker.random.number({ max, min });
const randomInts = (count: number, min: number, max: number) =>
  getArrayRecords(count, () => randomInt(min, max));

const countriesDataSet = (countriesCount: number) => {
  return {
    data: randomInts(countriesCount, 20, 100),
    labels: randomCountries(countriesCount),
    colors: COLORS.slice(0, countriesCount)
  };
};

const fakeUser = () => {
  const name = faker?.name?.findName();
  const imageUrl = faker.image.abstract(500, 500, true);
  return {
    id: "",
    name,
    imageUrl,
    status: faker.random.word(),
    job: faker.name.jobTitle(),
    location: faker.address.city(),
    email: faker.internet.email(name)
  };
};

const fakeNotification = (i: number) => {
  const name = faker?.name?.findName();
  const url = faker.image.abstract(200, 200, true);
  return {
    id: i,
    name,
    url,
    description: faker.random.words(5),
    date: faker.random.number({ max: 60 })
  };
};
const fakeDataTableRow = () => {
  const name = faker?.name?.findName();
  const url = faker.image.abstract(200, 200, true);
  const randomBool = faker.random.boolean();
  const role = randomBool ? Role.Admin : Role.Member;

  return {
    name,
    url,
    email: faker.internet.email(name),
    title: faker.name.jobTitle(),
    active: faker.random.boolean(),
    role
  };
};

const userFactory = (length: number) => {
  return [...Array(length).keys()].map(fakeUser);
};
const notificationFactory = (length: number) => {
  return [...Array(length).keys()]
    .map(i => fakeNotification(i))
    .sort((a, b) => a.date - b.date);
};

const dataTableFactory = (length: number) => {
  return [...Array(length).keys()].map(fakeDataTableRow);
};

const users = userFactory(12);
const notifications = notificationFactory(4);
const dataTableEntries = dataTableFactory(15);
const dataSets = getArrayRecords(randomInt(3, 12), () => countriesDataSet(4));
export { users, notifications, dataTableEntries, dataSets };
