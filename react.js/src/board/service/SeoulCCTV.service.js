const { SettingsRemoteSharp } = require("@material-ui/icons")
const { default: axios } = require("axios")

const getAllCCTVs = () => {
    axios.get(`/data/SeoulCCTV.json`)
    .then(res => {
        SettingsRemoteSharp(res.data.DATA)
    })
    .catch(err => {})
}