// @ts-ignore
export const api = axios.create({
    baseURL:'https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple',
    timeout: 3000
})