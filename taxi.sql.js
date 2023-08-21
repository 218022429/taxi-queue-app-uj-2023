import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue(passenger_queue_count) {
    // console.log('join queue')
    const sql = `add into taxi_queue (passenger_queue_count) values (?,?,?)`
    await db.run(sql, [passenger_queue_count]) 

}

export async function leaveQueue(passenger_queue_count) {
    const sql = `delete into taxi_queue (passenger_queue_count) values (?,?,?)`
    await db.run(sql, [passenger_queue_count]) 
}

export async function joinTaxiQueue(taxi_queue_count) {
    const sql = `add into taxi_queue (taxi_queue_count) values (?,?,?)`
    await db.run(sql, [taxi_queue_count])
}

export async function queueLength() {
       
}

export async function taxiQueueLength() {

}

export function taxiDepart() {

}