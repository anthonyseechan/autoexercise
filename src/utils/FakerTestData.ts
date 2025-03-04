import { faker } from "@faker-js/faker";
import path from "path";
import * as fs from "fs";

interface UserData {
    gender: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
    mobile: string;
    comment: string;
}

interface PaymentData {
    cardName: string;
    cardNumber: string;
    expiryMonth: string;
    expiryYear: string;
    cvc: string;
}

const generateUserData = (): UserData => {
    return {
        gender: 'Mr.',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        day: faker.number.int({ min: 1, max: 28 }).toString(),
        month: faker.number.int({ min: 1, max: 12 }).toString(),
        year: faker.number.int({ min: 1990, max: 2000 }).toString(),
        address: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: 'New Zealand',
        mobile: faker.phone.number(),
        comment: faker.lorem.sentence(5)
    }
}

const generatePaymentData = (): PaymentData => {
    return {
        cardName: faker.person.fullName(),
        cardNumber: faker.finance.creditCardNumber(),
        expiryMonth: faker.number.int({ max: 12 }).toString(),
        expiryYear: faker.number.int({ min: 2030, max: 2035 }).toString(),
        cvc: faker.finance.creditCardCVV()
    }
}

export const generateUserTestData = (numRecords: number): UserData[] => {
    const userTestData: UserData[] = faker.helpers.multiple(generateUserData, {
    count: numRecords});
    return userTestData;
  };

export const generatePaymentTestData = (numRecords: number): PaymentData[] => {
    const paymentTestData: PaymentData[] = faker.helpers.multiple(generatePaymentData, {
    count: numRecords});
    return paymentTestData;
  };

const testdataDir = path.resolve("test-data");

// Function to export data to JSON file
export const exportToJsonUserData = (data: UserData[], fileName: string) => {
  fs.writeFileSync(`${testdataDir}\\${fileName}`, JSON.stringify(data, null, 2));
  console.log(`Data exported to JSON file: ${testdataDir}\\${fileName}`);
};

export const exportToJsonPaymentData = (data: PaymentData[], fileName: string) => {
    fs.writeFileSync(`${testdataDir}\\${fileName}`, JSON.stringify(data, null, 2));
    console.log(`Data exported to JSON file: ${testdataDir}\\${fileName}`);
  };