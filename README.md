# sdk-typescript
Official SDK in TypeScript that can be used to perform request on the entire TeamSystem Commerce, enhanced by [@Axios](https://axios-http.com/docs/intro).

# Installation
`npm i tscommerce/sdk-typescript`

# Import
```TypeScript
import Client from 'tscommerce/sdk-typescript';
```

# Vue.js Example
```HTML
<script lang="ts">
import { defineComponent } from 'vue';
import Client from 'tscommerce/sdk-typescript';
export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            productId: this.id
        }
    },
    methods: {
        getProduct(id?:number) {
            return id ? Client.API.Products(id) : Client.API.Products();
        }
    },
    mounted() {
        console.log(this.getProducts());
        console.log(this.getProducts(this.productId));
    }
});
</script>
```

# Custom Requests
```TypeScript
// Import requirements and types
import Client from 'tscommerce/sdk-typescript';
import { type Request } from 'tscommerce/sdk-typescript/lib/interfaces/Request'; // Extended AxiosRequest
import { RequestMethod } from 'tscommerce/sdk-typesscript/lib/enums/RequestEnum';

// Setup Data
const data = {
    id: this.id, // Optional, depending on your configuration request
    field1: "Hi!",
    field2: 1234,
    field3: true
};

const query = {
    locale: 'it'
};

// Configure your custom request
const request:Request = {
    method: RequestMethod.POST,
    endpoint: "/my/custom/endpoint",
    data: data,
    query: query
};

// Send your custom request
Client.execute(request).then(response => {
    console.log(response);
});
```