const { test, expect } = require('@playwright/test')
const { Ajv } = require("ajv");

const ajv = new Ajv();



test('Get Request', async ({ request }) => {
    const response= await request.get("https://api.restful-api.dev/objects")
    //console.log(await response.json())

    
});
    
test('POST request', async ({ request }) => {

    const reqHeaders = {
        Accept: 'application/json'
    }

    const body = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }

    const response= await request.post("https://api.restful-api.dev/objects", {
        headers: reqHeaders, 
        data: body,
    })

    //console.log(await response.json())

    const resBody = await response.json()
    expect(resBody.name).toEqual('Apple MacBook Pro 16')

    const valid=ajv.validate(require("../json-schema/add-object-schema"), resBody);
    if (!valid){
        console.error("AJV Validation errors:", ajv.errorsText());
    }
    expect(valid).toBe(true);

});