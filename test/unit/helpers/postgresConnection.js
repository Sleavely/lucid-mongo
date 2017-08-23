'use strict'

/**
 * adonis-lucid
 * Copyright(c) 2016-2016 Harminder Virk
 * MIT Licensed
*/

module.exports = {
  default: {
    client: 'pg',
    connection: {
      user: 'harmindervirk',
      password: '',
      database: 'default'
    }
  },

  alternateConnection: {
    client: 'pg',
    connection: {
      user: 'harmindervirk',
      password: '',
      database: 'alternate'
    }
  },

  defaultPrefix: {
    client: 'pg',
    connection: {
      user: 'harmindervirk',
      password: '',
      database: 'default'
    },
    prefix: 'ad_'
  }
}