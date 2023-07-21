import { Table } from "@jikji/react";

const LIST = [
  {
    ip: "20.102.1.11",
    name: "stage-static-a.webteam.walltests.com",
    sites:
      "begans.cmruy.com, botspam.bls.baseguard.ca, botspam.bls.baseguard.ca, botspam.bls.baseguard.ca, begans.cmruy.com, botspam.bls.baseguard.ca, botspam.bls.baseguard.ca, botspam.bls.baseguard.ca",
    last_seen: "2023-03-22 18:39:48",
  },
  {
    ip: "200.17.49.90",
    name: "mail04.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-22 18:39:34",
  },
  {
    ip: "195.154.231.145",
    name: "mail10.messages.walltests.com",
    sites:
      "spam.dnsbl.sorbs.net, spam.dnsbl.sorbs.net, spam.dnsbl.sorbs.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-22 18:37:36",
  },
  {
    ip: "195.154.231.145",
    name: "mail10.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:32:48",
  },
  {
    ip: "34.210.175.37",
    name: "supportremote.walltests.com",
    sites: "spam.spamrats.com",
    last_seen: "2023-03-20 20:32:20",
  },
  {
    ip: "195.17.49.75",
    name: "mail05.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:27:47",
  },
  {
    ip: "10.200.50.200",
    name: "kb2.security.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-20 20:26:03",
  },
  {
    ip: "195.154.231.146",
    name: "mail03.messages.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:25:44",
  },
  {
    ip: "20.102.1.11",
    name: "stage-static-a.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-20 20:24:42",
  },
  {
    ip: "149.72.146.194",
    name: "o1.ptr9810.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:24:20",
  },
  {
    ip: "103.19.168.252",
    name: "kapila.eng.walltests.com",
    sites: "b.barracudacentral.org",
    last_seen: "2023-03-20 20:24:08",
  },
  {
    ip: "195.154.231.144",
    name: "mail01.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:23:49",
  },
  {
    ip: "145.240.221.13",
    name: "ams0vm-hesra06.colo.walltests.com",
    sites: "all.s5h.net, ips.backscatterer.org",
    last_seen: "2023-03-20 20:21:43",
  },
  {
    ip: "195.17.49.76",
    name: "mail06.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:19:00",
  },
  {
    ip: "200.17.49.90",
    name: "mail04.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:18:38",
  },
  {
    ip: "20.102.1.11",
    name: "stage-www.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-20 20:17:03",
  },
  {
    ip: "168.245.40.116",
    name: "o2.ptr4688.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-20 20:15:04",
  },
  {
    ip: "10.200.50.200",
    name: "kb.security.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-20 20:14:24",
  },
  {
    ip: "145.240.221.13",
    name: "ams0vm-hesra07.colo.walltests.com",
    sites: "all.s5h.net, ips.backscatterer.org",
    last_seen: "2023-03-20 20:14:00",
  },
  {
    ip: "52.25.211.9",
    name: "sb3.antispam.global.walltests.com",
    sites: "b.barracudacentral.org",
    last_seen: "2023-03-20 20:10:51",
  },
  {
    ip: "10.101.1.10",
    name: "stage-tools.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-20 20:05:10",
  },
  {
    ip: "10.101.1.15",
    name: "qa-www.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-20 20:04:03",
  },
  {
    ip: "195.154.231.145",
    name: "mail10.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:42:52",
  },
  {
    ip: "34.210.175.37",
    name: "supportremote.walltests.com",
    sites:
      "spam.spamrats.com, begans.cmruy.com, botspam.bls.baseguard.ca, begans.cmruy.com, botspam.bls.baseguard.ca, begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-17 20:41:03",
  },
  {
    ip: "195.17.49.75",
    name: "mail05.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:37:59",
  },
  {
    ip: "10.200.50.200",
    name: "kb2.security.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-17 20:36:41",
  },
  {
    ip: "195.154.231.146",
    name: "mail03.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:36:20",
  },
  {
    ip: "149.72.146.194",
    name: "o1.ptr9810.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:35:42",
  },
  {
    ip: "20.102.1.11",
    name: "stage-static-a.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-17 20:35:21",
  },
  {
    ip: "103.19.168.252",
    name: "kapila.eng.walltests.com",
    sites: "b.barracudacentral.org",
    last_seen: "2023-03-17 20:34:45",
  },
  {
    ip: "195.154.231.144",
    name: "mail01.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:34:27",
  },
  {
    ip: "145.240.221.13",
    name: "ams0vm-hesra06.colo.walltests.com",
    sites: "all.s5h.net",
    last_seen: "2023-03-17 20:32:21",
  },
  {
    ip: "195.17.49.76",
    name: "mail06.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:29:32",
  },
  {
    ip: "200.17.49.90",
    name: "mail04.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:29:16",
  },
  {
    ip: "20.102.1.11",
    name: "stage-www.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-17 20:27:52",
  },
  {
    ip: "168.245.40.116",
    name: "o2.ptr4688.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-17 20:23:32",
  },
  {
    ip: "10.200.50.200",
    name: "kb.security.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-17 20:22:36",
  },
  {
    ip: "145.240.221.13",
    name: "ams0vm-hesra07.colo.walltests.com",
    sites: "all.s5h.net, ips.backscatterer.org",
    last_seen: "2023-03-17 20:21:50",
  },
  {
    ip: "52.25.211.9",
    name: "sb3.antispam.global.walltests.com",
    sites: "b.barracudacentral.org",
    last_seen: "2023-03-17 20:15:24",
  },
  {
    ip: "10.101.1.10",
    name: "stage-tools.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-17 20:03:46",
  },
  {
    ip: "195.154.231.145",
    name: "mail10.messages.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-13 20:19:49",
  },
  {
    ip: "34.210.175.37",
    name: "supportremote.walltests.com",
    sites: "spam.spamrats.com",
    last_seen: "2023-03-13 20:18:00",
  },
  {
    ip: "195.17.49.75",
    name: "mail05.messages.walltests.com",
    sites: "spam.dnsbl.sorbs.net",
    last_seen: "2023-03-13 20:15:00",
  },
  {
    ip: "10.200.50.200",
    name: "kb2.security.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-13 20:13:32",
  },
  {
    ip: "195.154.231.146",
    name: "mail03.messages.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-13 20:13:13",
  },
  {
    ip: "149.72.146.194",
    name: "o1.ptr9810.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-13 20:12:36",
  },
  {
    ip: "20.102.1.11",
    name: "stage-static-a.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-13 20:12:11",
  },
  {
    ip: "103.19.168.252",
    name: "kapila.eng.walltests.com",
    sites: "b.barracudacentral.org",
    last_seen: "2023-03-13 20:11:33",
  },
  {
    ip: "10.200.50.200",
    name: "kb2.security.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-13 20:13:32",
  },
  {
    ip: "195.154.231.146",
    name: "mail03.messages.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-13 20:13:13",
  },
  {
    ip: "149.72.146.194",
    name: "o1.ptr9810.walltests.com",
    sites: "dnsbl-3.protectuce.net, spam.dnsbl.sorbs.net",
    last_seen: "2023-03-13 20:12:36",
  },
  {
    ip: "20.102.1.11",
    name: "stage-static-a.webteam.walltests.com",
    sites: "begans.cmruy.com, botspam.bls.baseguard.ca",
    last_seen: "2023-03-13 20:12:11",
  },
  {
    ip: "103.19.168.252",
    name: "kapila.eng.walltests.com",
    sites: "b.barracudacentral.org",
    last_seen: "2023-03-13 20:11:33",
  },
];

// duplicate for testing
const FINAL_LIST = [...LIST, ...LIST, ...LIST, ...LIST, ...LIST, ...LIST, ...LIST, ...LIST, ...LIST];

const TableView = () => (
  <div style={{ padding: "0 15px" }}>
    <Table className="table">
      <thead>
        <tr className="table-head">
          <th>IP</th>
          <th>Name</th>
          <th>Site(s)</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {FINAL_LIST.map((item, index) => (
          <tr key={index} className="table-row">
            <td>
              <h4>{item.ip}</h4>
            </td>
            <td>{item.name}</td>
            <td>{item.sites}</td>
            <td>{item.last_seen}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default TableView;
