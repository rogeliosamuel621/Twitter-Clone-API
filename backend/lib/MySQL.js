const pool = require('./database/connection');

const MySQL = {
    
    GetOne(table, condition, id, callback) {
        pool.query(`SELECT * FROM ${table} WHERE ${condition} = ?`, [id], (err, row) => {
            if(err) {
                return callback(err, null);
            }
            
            if(row) {
                callback(null, row);
            }
        });
    },

    GetMany(table, callback) {
        pool.query(`SELECT * FROM ${table}`, (err, rows) => {
            if(err) {
                return callback(err, null);
            }
            callback(null, rows);
        })
    },

    Create(table, data, callback) {

        pool.query(`INSERT INTO ${table} SET ?`, [data], (err) => {
            if(err){
                return callback(err);
            }
            callback(null);
        })
    },

    Update(table, condition, data, id, callback) {
        pool.query(`UPDATE ${table} SET ? WHERE ${condition} = ?`, [data, id], (err, rowUpdated) => {
            if(err) {
                return callback(err, null);
            }
            callback(null, rowUpdated);
        });
    },

    Delete(table, condition, id, callback) {
        pool.query(`DELETE FROM ${table} WHERE ${condition} = ?`, [id], (err) => {
            if(err) {
                return callback(err, null);
            }
                callback(null);
        });
    }
}

module.exports = MySQL;