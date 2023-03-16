import axios from 'axios'
import fs from 'fs'

// Define the API URL and the number of requests to make
const apiUrl = 'https://phillippaprimary.ehgqa.com/api/fp/da/v1/f579d216-f4b3-41ed-a39e-57d84355042c/debtor-account/search2';
const numRequests = 20;
const cookie = ""
const referer = "https://phillippaprimary.ehgqa.com/";
const doublesubmit = '';

const body = {
    "accountStatus": "active",
    "debtorContactInQuickList": false,
    "studentCurrentInQuickList": false,
    "studentFutureInQuickList": false,
    "studentPastInQuickList": false,
    "pageNum": 1,
    "isPageable": true,
    "pageLimit": 100
}
const headers = {
    'Cookie': cookie,
    'Referer': referer,
    'x-custom-doublesubmit': doublesubmit,
    'Content-Tpye': 'application/json',
}

async function call(i) {
    try {
        const {data} = await axios.post(apiUrl,body, {headers})
        fs.writeFileSync(`response-${i}.json`, JSON.stringify(data.data))
        console.log(`Wrote DATA to response-${i}.json`)

    } catch(e) {
        fs.writeFileSync(`response-${i}.json`, "errored")
        console.log(`Wrote ERROR response to response-${i}.json`)
    }
    
}

async function ping() {
    for (let i = 0; i < numRequests; i++) {
        call(i)
    }
}

ping()

