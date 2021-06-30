import { useState } from "react"
import { PageNumbersBlock } from "../../components/PageNumbersBlock/PageNumbersBlock"
import { UsersBlock } from "../../components/UsersBlock/UsersTable"
import './UsersPage.scss'
export const UsersPage = () => {
    const [arrayNumber, setArrayNumber] = useState(0);

    const users = [
        { id: 1, first_name: "Christie", last_name: "Gann", email: "cgann0@hostgator.com", gender: "Female", ip_address: "57.14.195.231" },
        { id: 2, first_name: "Hamil", last_name: "Cressey", email: "hcressey1@delicious.com", gender: "Male", ip_address: "45.225.25.145" },
        { id: 3, first_name: "Lottie", last_name: "Dupre", email: "ldupre2@dot.gov", gender: "Female", ip_address: "254.46.181.79" },
        { id: 4, first_name: "Godfry", last_name: "Raoult", email: "graoult3@npr.org", gender: "Male", ip_address: "133.124.79.194" },
        { id: 5, first_name: "Dorrie", last_name: "Beckley", email: "dbeckley4@buzzfeed.com", gender: "Female", ip_address: "252.217.2.208" },
        { id: 6, first_name: "Linc", last_name: "Milella", email: "lmilella5@wikispaces.com", gender: "Male", ip_address: "175.119.105.110" },
        { id: 7, first_name: "Alfie", last_name: "O' Sullivan", email: "aosullivan6@sphinn.com", gender: "Male", ip_address: "218.183.185.92" },
        { id: 8, first_name: "Urbanus", last_name: "Pittford", email: "upittford7@mit.edu", gender: "Male", ip_address: "199.232.254.9" },
        { id: 9, first_name: "Osbourne", last_name: "Andreacci", email: "oandreacci8@eventbrite.com", gender: "Male", ip_address: "172.255.67.174" },
        { id: 10, first_name: "Dina", last_name: "Sturt", email: "dsturt9@npr.org", gender: "Female", ip_address: "170.156.106.240" },
        { id: 11, first_name: "Corrinne", last_name: "Muskett", email: "cmusketta@arstechnica.com", gender: "Female", ip_address: "61.24.39.159" },
        { id: 12, first_name: "Alla", last_name: "Symes", email: "asymesb@usatoday.com", gender: "Female", ip_address: "224.194.222.88" },
        { id: 13, first_name: "Cheri", last_name: "Bier", email: "cbierc@independent.co.uk", gender: "Female", ip_address: "152.9.22.103" },
        { id: 14, first_name: "Antony", last_name: "Sesser", email: "asesserd@spiegel.de", gender: "Male", ip_address: "138.238.136.114" },
        { id: 15, first_name: "Clair", last_name: "Willmot", email: "cwillmote@huffingtonpost.com", gender: "Female", ip_address: "245.57.42.28" },
        { id: 16, first_name: "Rosamund", last_name: "Shaudfurth", email: "rshaudfurthf@ibm.com", gender: "Female", ip_address: "128.84.117.152" },
        { id: 17, first_name: "Nevins", last_name: "Wormleighton", email: "nwormleightong@rambler.ru", gender: "Male", ip_address: "75.150.68.233" },
        { id: 18, first_name: "Batholomew", last_name: "Rootham", email: "broothamh@webs.com", gender: "Male", ip_address: "249.15.154.153" },
        { id: 19, first_name: "Shaughn", last_name: "Huntriss", email: "shuntrissi@ocn.ne.jp", gender: "Male", ip_address: "198.93.235.123" },
        { id: 20, first_name: "Gardie", last_name: "Ager", email: "gagerj@bbc.co.uk", gender: "Male", ip_address: "126.49.118.30" },
        // { id: 21, first_name: "Cesaro", last_name: "Le Count", email: "clecountk@furl.net", gender: "Male", ip_address: "134.34.246.115" },
        // { id: 22, first_name: "Gilbert", last_name: "Seak", email: "gseakl@ft.com", gender: "Male", ip_address: "47.103.56.196" },
        // { id: 23, first_name: "Ambrosio", last_name: "Cicetti", email: "acicettim@stanford.edu", gender: "Male", ip_address: "6.128.37.18" },
        // { id: 24, first_name: "Felicia", last_name: "Tye", email: "ftyen@blinklist.com", gender: "Female", ip_address: "115.88.107.43" },
        // { id: 25, first_name: "Sephira", last_name: "Scarborough", email: "sscarborougho@unesco.org", gender: "Female", ip_address: "60.118.38.136" },
        // { id: 26, first_name: "Aila", last_name: "Twaits", email: "atwaitsp@blogger.com", gender: "Female", ip_address: "86.147.79.6" },
        // { id: 27, first_name: "Barnabas", last_name: "Lockart", email: "blockartq@reddit.com", gender: "Male", ip_address: "189.209.32.22" },
        // { id: 28, first_name: "Emlyn", last_name: "Crabtree", email: "ecrabtreer@google.com.hk", gender: "Male", ip_address: "107.145.140.154" },

    ]

    return (<div className="users-page">
        <div className="users-page__users-table">
            <UsersBlock users={users} />
            <PageNumbersBlock arrayNumber={arrayNumber} setArrayNumber={setArrayNumber} />
        </div>
    </div>)
}