1. Navigate to miniapp-test
    - run `yarn install`

2. Navigate to miniapp-test/app/server
    - run `yarn install`
    - run `yarn start`
        + Test GraphQL:
            Url: http://localhost:5001/v1/testing/graph
            Body: query fooDetails($name: String!) {
                    fooDetails(name: $name) {
                        formatedName,
                        something
                    }
                }
            Variables: {
                            "name": "TrucDit"
                        }

3. Navigate to miniapp-test/app/frontend
    - run `yarn install`

NOTES: Search TODO to complete project