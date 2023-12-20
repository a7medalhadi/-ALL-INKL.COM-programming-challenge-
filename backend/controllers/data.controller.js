const pool = require('../db/connectionPool');

module.exports = {

    // get Thermometer Log Data 
    async  getThermometerLog(){
      const data = await  pool.query('SELECT * FROM AC_Thermometer_Log');
      return data;
    },

    // get Daily Account Balance Data
    async getDailyAccountBalance(){
        const data = await  pool.query('SELECT * FROM Daily_Account_Balance');
        return data;
    },

    // get Daily Email Log Data
    async getDailyEmailLog(){
        const data = await  pool.query('SELECT * FROM Daily_Email_Log');
        return data;
    }
};