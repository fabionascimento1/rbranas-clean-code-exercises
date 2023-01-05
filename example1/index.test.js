const example1 = require("./index");

test("Cacular uma corrida de taxi dia normal", function () {
  const distance = 1000;
  const date = new Date("2021-07-10T10:00:00");
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(2100);
});

test("Cacular uma corrida de taxi dia noite", function () {
  const distance = 1000;
  const date = new Date("2021-07-10T23:00:00");
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(3900);
});

test("Cacular uma corrida de taxi aos domingos", function () {
  const distance = 1000;
  const date = new Date("2023-01-01T10:00:00");
  const price = example1.calculateRide(distance, date);
  expect(price).toBe(2900);
});

test("Deve lançar uma expection se distancia for invalidade", function () {
  const distance = "1000";
  const date = new Date("2023-01-01T10:00:00");
  expect(() => example1.calculateRide(distance, date)).toThrow(
    new Error("Invalid parameter distance")
  );
});

test("Deve lançar uma expection se data for invalidade", function () {
  const distance = 1000;
  const date = "2023-01-01T10:00:00";
  expect(() => example1.calculateRide(distance, date)).toThrow(
    new Error("Invalid parameter date")
  );
});

test("Verificar se é noite", function () {
  const date = new Date("2023-01-02T23:00:00");
  const isOvernight = example1.isOvernight(date);
  expect(isOvernight).toBeTruthy();
});

test("Verificar se é Domingo", function () {
  const date = new Date("2023-01-01T23:00:00");
  const isSunday = example1.isOvernight(date);
  expect(isSunday).toBeTruthy();
});
