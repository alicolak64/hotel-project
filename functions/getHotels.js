const fetch = require('node-fetch');


exports.handler = async function () {

    const query = `
        query {
            hotelData {
                values {
                    id ,
                    name ,
                    rating
                }
            }
        }
    `


    const url = process.env.GETHOTELS
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-cassandra-token': process.env.X_Cassandra_Token
        } ,
        body: JSON.stringify({ query })
    }

    const response = await fetch(url, options)


    try {
        const responseBody = await response.json()
        return {
            statusCode: 200,
            body: JSON.stringify(responseBody)
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        }
    }

}

