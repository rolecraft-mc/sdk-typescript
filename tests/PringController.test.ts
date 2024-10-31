

// Jest
import * as Jest from '@jest/globals'
// RoleCraft SDK
import Client from "../src";

//////////
// Test //
//////////

Jest.describe('Test >> PingController', () => {

    Jest.it('PingController:GET', async () => {
        const response = await Client.Ping().get();
        Jest.expect(response.status).toBe(200);
    });

});
