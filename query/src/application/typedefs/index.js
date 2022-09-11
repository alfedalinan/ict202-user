const { gql } = require('apollo-server')
const readTypeDefs = require('../lib/read-type-defs')
const userTypeDefs = readTypeDefs(`${__dirname}/user`)

const typeDefs = gql`
    type Query 
    type Mutation {
        blank: String
    }
    ${userTypeDefs}
`

module.exports = typeDefs