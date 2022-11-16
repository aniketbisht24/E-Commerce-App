import axios from 'axios'

const BASE_URL = "http://localhost:3000"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg3YWRmOTI5YTE3ZGQxMjIyOGUzMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Njg0ODM0MSwiZXhwIjoxNjY2OTM0NzQxfQ.DBa0bBCQ6lHCxJHo4XFJFIhPdoreVKztTyove2Fktko"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})