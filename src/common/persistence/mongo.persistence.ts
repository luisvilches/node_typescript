import { connect } from 'mongoose'

export default (callback: Function) => {
    connect(String(process.env.DB), { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        if (callback != undefined) callback();
    })
}