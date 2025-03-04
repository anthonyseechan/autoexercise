import { test as setup } from '@playwright/test';
import { generateUserTestData, generatePaymentTestData, exportToJsonUserData, exportToJsonPaymentData } from '../../src/utils/FakerTestData';

//Generate testdata files
setup('Generate test data', async () => {
    const userTestData = generateUserTestData(1);
    const paymentTestData = generatePaymentTestData(1);
    exportToJsonUserData(userTestData, 'userTestData.json');
    exportToJsonPaymentData(paymentTestData, 'paymentTestData.json');
});


