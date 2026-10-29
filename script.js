/* ============ EDIT ME: links & placeholders ============ */
const LINKEDIN_POST = "https://lnkd.in/p/dKgTwxyE"; // shared write-up link from your profile (used by projects 8-12)
const TRYHACKME = "https://tryhackme.com/p/annusjawadofficial";
/* Add real URLs to ev:{gh,wu,shots,demo,docs} below. Anything left out simply shows no button. */

const P = [
{t:"Router Telemetry Pipeline & SSH Brute-Force Detection",c:"Detection",
 what:"Live OpenWrt router to Wazuh SIEM pipeline, with a custom rule that detects SSH brute-force attacks.",
 why:"To bridge the gap between brute-force theory and catching it on real hardware, using real traffic instead of a simulated environment.",
 obj:"Get router logs into Wazuh with clean fields and alert on high-frequency SSH authentication failures.",
 tools:["OpenWrt","Wazuh","Syslog (UDP 514)","tcpdump","Custom decoders","Python + Paramiko","XML rules","MITRE T1110"],
 did:["Configured syslog transport from the router and verified packet flow with tcpdump at the edge.","Tested custom decoders to extract fields such as srcip and dstuser.","Emulated SSH brute-force attacks against the router with a Paramiko script.","Wrote custom rule 100020 (botnet.xml) to catch authentication spikes and close a coverage gap."],
 skills:["Log parsing and field extraction","Correlation rule writing","Attack emulation","ATT&CK mapping"],
 out:"A working log, decode, correlate, alert pipeline validated against live emulated attacks.",
 rel:"Network devices are common brute-force targets. Detection is only as good as the parsing behind it, which is a daily concern for detection engineers.",
 ev:{gh:"https://github.com/annus-jawad/Detection-Engineering-Lab",wu:"https://lnkd.in/p/dnVUd98n"}},
{t:"Detecting Living-off-the-Land Techniques (Wazuh + Sysmon)",c:"Detection",
 what:"Home detection lab focused on abuse of native Windows binaries such as cipher.exe.",
 why:"To understand how attackers use built-in tools to hide or destroy data, and how to turn endpoint telemetry into alerts.",
 obj:"Detect suspicious native-binary execution with custom Wazuh rules mapped to MITRE ATT&CK.",
 tools:["Wazuh (SIEM/XDR)","Sysmon (custom config)","XML detection rules","MITRE ATT&CK","Virtualized lab"],
 did:["Deployed Sysmon for visibility into process creation, network connections and registry changes.","Simulated LotL behaviour in the lab.","Wrote custom XML rules to alert on suspicious binary execution.","Used if_sid mappings so Sysmon events parsed correctly and false positives dropped."],
 skills:["Endpoint telemetry","Rule tuning","Log normalization","Alert-to-intelligence thinking"],
 out:"Custom rules that alert on LotL activity with less noise in the dashboard.",
 rel:"LotL techniques blend in with admin activity, so tuned endpoint detections are a core defence against them.",
 ev:{wu:"https://lnkd.in/p/dYqbptza"}},
{t:"Wazuh SIEM/XDR Lab with File Integrity Monitoring",c:"SIEM Lab",
 what:"Full SIEM/XDR lab on a virtualized Linux/Windows stack.",
 why:"To learn real-time threat detection and incident response operations from the ground up, not just from documentation.",
 obj:"Build a stable monitoring environment with proactive controls such as FIM.",
 tools:["Wazuh manager & agents","Linux and Windows VMs","Virtual network adapters","File Integrity Monitoring"],
 did:["Troubleshot agent-manager connectivity so data flowed reliably across virtual adapters.","Configured custom network interfaces for secure communication in a locked-down virtual network.","Handled environment configuration and registry cleanup for a successful deployment.","Enabled FIM to detect unauthorized file changes in real time."],
 skills:["Agent deployment","Network troubleshooting","Keeping monitoring infrastructure healthy","Proactive controls (FIM)"],
 out:"A working lab with FIM alerts on endpoint changes.",
 rel:"FIM is a standard control for spotting tampering, and a SIEM is only useful if its agents reliably report in.",
 ev:{wu:"https://lnkd.in/p/dQXnK-Aq"}},
{t:"Python Network Sniffer",c:"Network",
 what:"Live packet capture and analysis tool built with Scapy.",
 why:"To see how packets actually move across a network instead of only reading about it.",
 obj:"Capture live traffic and present protocol-specific details in a readable format.",
 tools:["Python","Scapy","Npcap","BPF filters"],
 did:["Built a protocol dispatcher routing each packet to a TCP, UDP, ICMP or ARP handler.","Extracted protocol fields (TCP seq/ack, ARP hardware addresses, ICMP type/code).","Resolved ports to service names and IPs to hostnames, with caching so live capture stays fast.","Added BPF filters (tcp, port 80, host <ip>) and a live column-aligned packet table."],
 skills:["Protocol internals","Python tooling","Packet filtering","Performance-minded design"],
 out:"A working CLI sniffer that parses and displays live traffic.",
 rel:"Understanding packets at field level underpins network detection, IDS tuning and incident investigation.",
 ev:{gh:"https://github.com/annus-jawad/Network-sniffer"}},
{t:"Traffic Analysis, Email Forensics & Port Scanning",c:"Network",
 what:"Three connected blue-team exercises: Wireshark capture and filtering, recovering evidence from a packet capture, and Nmap scanning.",
 why:"To practise core SOC skills in one project: capturing and filtering traffic, recovering evidence, and finding exposed services.",
 obj:"Isolate traffic with display filters, rebuild an SMTP session from a capture, and interpret local and remote scans.",
 tools:["Wireshark 4.6.4","Nmap 7.98","Kali Linux","Python 3","base64","md5sum"],
 did:["Captured 278 packets on my own Wi-Fi interface, applied display filters and inspected a packet layer by layer.","Analysed a practice capture (“Ann’s Rendezvous”): followed SMTP streams, decoded base64 credentials, extracted the attachment with Python and hashed it.","Unzipped the .docx to find the embedded map image and the meeting location.","Scanned my own machine (no open ports) and an authorized host (22, 80, 443, 8443 open)."],
 skills:["Wireshark filtering","Evidence recovery","Hashing","Scan interpretation"],
 out:"A documented report tracing plaintext SMTP to credentials, attachment, hash and location, plus two scan results.",
 rel:"Plaintext protocols expose everything, TLS hides content, base64 is not security, and open ports are attack surface. These are routine SOC observations.",
 ev:{gh:"https://github.com/annus-jawad/Network-Traffic-Analysis-Email-Forensics-Host-Reconnaissance"}},
{t:"Data Recovery Lab (FAT32)",c:"Forensics",
 what:"Recovering deleted files from a FAT32 USB stick using Recuva and PhotoRec.",
 why:"To understand how deletion and quick format really work, and why recovery succeeds or fails.",
 obj:"Test normal delete, Shift+Delete and quick format, then compare two recovery tools.",
 tools:["Windows 11","Recuva","PhotoRec (TestDisk)","PowerShell Get-FileHash (SHA-256)"],
 did:["Recorded SHA-256 hashes of three test files (text, PDF, JPEG) before deletion.","Ran the three deletion scenarios and recovered files with both tools.","Saved recovered files to a different drive so nothing was written to the stick.","Verified every recovery by hash and diagnosed a 104-byte mismatch on a Recuva-recovered JPEG."],
 skills:["Forensic hygiene","Hash verification","Tool comparison","File system understanding"],
 out:"6 of 10 recovery attempts succeeded; 5 of those 6 were byte-identical to the originals. The sixth held all the original data plus 104 bytes of padding.",
 rel:"Deletion only changes metadata and quick format does not erase data, which matters for evidence handling and data-disposal decisions.",
 ev:{gh:"https://github.com/annus-jawad/Digital-Forensics-"}},
{t:"Credit Card Fraud Detection with Machine Learning",c:"ML",
 what:"ML pipeline to detect fraud in 284,807 transactions, of which only 0.173% are fraudulent.",
 why:"To work through a full fraud-detection workflow on extremely imbalanced data.",
 obj:"Handle class imbalance and compare models with metrics that stay meaningful when fraud is rare.",
 tools:["Python","Jupyter","pandas","scikit-learn","imbalanced-learn (SMOTE)","XGBoost","matplotlib/seaborn"],
 did:["Explored the data, then did a stratified split before any scaling or resampling to prevent leakage.","Compared SMOTE and class weighting, applied to training data only.","Trained Logistic Regression, Random Forest and XGBoost on the same untouched test set.","Evaluated with precision, recall, F1, PR-AUC and confusion matrices; analysed thresholds and feature importance."],
 skills:["Leakage-safe ML workflow","Imbalanced-data metrics","Model comparison","Threshold analysis"],
 out:"Tree-based models reached PR-AUC of about 0.86 to 0.88 versus 0.72 to 0.75 for Logistic Regression. XGBoost trained in 3s versus 25s for Random Forest. Results are tentative: the test set has only 98 frauds.",
 rel:"Accuracy is misleading on rare events (predicting “legitimate” always scores 99.83%). The same thinking applies to alert-quality metrics in a SOC.",
 ev:{gh:"https://github.com/annus-jawad/Machine-Learning-Pipeline-for-Extreme-Imbalance-Credit-Card-Fraud-Detection"}},
{t:"SOC Home Lab: Kali Linux & Wazuh SIEM on VMware",c:"SIEM Lab",
 what:"Virtual SOC lab with Kali Linux and a Wazuh SIEM on an isolated NAT network (192.168.100.0/24).",
 why:"As a Software Engineering graduate moving into SOC L1 / Blue Team roles, I wanted a working SIEM of my own: attacker machine, SIEM and monitored endpoint. It became the base for my later projects.",
 obj:"Build a virtual lab with Kali Linux and Wazuh, with a Wazuh agent on Kali reporting to the dashboard.",
 tools:["VMware Workstation Pro","Virtual Network Editor","Kali Linux","Wazuh OVA (manager, indexer, dashboard)","Wazuh Agent"],
 did:["Enabled hardware virtualization (VT-x / AMD-V) in BIOS and configured the NAT network.","Installed and updated Kali, then took a “Clean Install” snapshot.","Imported the Wazuh OVA and checked the manager, indexer and dashboard services.","Confirmed the VMs could ping each other, installed the agent on Kali and generated a test security event."],
 skills:["Lab design","Layer-by-layer troubleshooting","Agent deployment","Snapshot discipline"],
 out:"A working Kali-to-Wazuh lab where the agent shows as active and a test event from Kali appears in the dashboard.",
 rel:"A SIEM is a chain of parts and a failure at any link looks the same on the dashboard. Checking each layer in order is how analysts troubleshoot missing data.",
 ev:{wu:LINKEDIN_POST}},
{t:"Network Security Monitoring with Suricata (IDS/IPS) & Zeek",c:"Network",
 what:"Ubuntu-based monitoring lab combining Suricata for real-time detection and prevention with Zeek for passive forensic logging.",
 why:"I wanted hands-on detection experience and to see how SOC tools combine: Suricata catches threats, Zeek keeps the records that verify and explain them. That is the triage skill I am aiming for at L1.",
 obj:"Deploy Suricata and Zeek, write my own rules, and correlate Suricata alerts with Zeek logs to tell real threats from harmless test traffic.",
 tools:["Ubuntu Server 24.04.3 (VirtualBox)","Suricata + Emerging Threats Open","tcpdump","iptables/NFQUEUE","jq","Zeek 7.0 + zeek-cut","Nmap","curl","cron"],
 did:["Installed Suricata, tested it on a PCAP captured with tcpdump, then ran live IDS mode and IPS mode via iptables/NFQUEUE.","Wrote custom rules to detect Facebook and YouTube traffic, detect Facebook via TLS SNI, and drop Facebook traffic.","Parsed eve.json with jq and automated daily rule updates with cron.","Analysed HTTP, DNS, a sample PCAP and an Nmap SYN scan in Zeek.","Correlated a Suricata alert (testmyids.com) with Zeek conn, http, dns, files and weird logs."],
 skills:["IDS/IPS rule writing","Alert correlation","False-positive verification","Troubleshooting (PATH, IPv6 formats)"],
 out:"The drop rule blocked Facebook in the browser. Zeek showed an Nmap scan hitting 1,000 unique ports in about 1 second (mostly REJ, port 22 RSTO). The testmyids.com alert was correlated across both tools and confirmed as an intentional false positive.",
 rel:"Plaintext matching fails on encrypted traffic but TLS SNI remains visible. Suricata flags a pattern and Zeek explains what happened, which is the core of alert triage.",
 ev:{wu:LINKEDIN_POST}},
{t:"Cyber Threat Intelligence: Dohdoor / UAT-10027 & WannaCry",c:"Threat Intel",
 what:"Multi-source threat intelligence assessment of two malicious Windows files.",
 why:"SOC analysts must turn raw detections into context. I wanted to practise that with the same public tools analysts use, building on my SIEM and ATT&CK mapping work.",
 obj:"Investigate two malicious files across several sources, map behaviour to MITRE ATT&CK, and rate confidence in each finding.",
 tools:["VirusTotal","AlienVault OTX","MITRE ATT&CK Navigator","Cisco Talos / LevelBlue report (Dohdoor)","Imperva report (WannaCry)"],
 did:["Dohdoor / UAT-10027: looked up the hash in VirusTotal, pivoted through OTX to the campaign, investigated a related phishing domain and mapped 13 ATT&CK techniques.","WannaCry: investigated a second hash, used OTX pulses and mapped 12 techniques.","Recommended: block domain and hashes, alert on side-loaded DLLs, patch MS17-010, disable SMBv1, block ports 445/139, keep offline backups, deploy EDR."],
 skills:["Intel pivoting","ATT&CK mapping","Confidence rating","Defensive recommendations"],
 out:"Dohdoor: flagged by 44 of 70 vendors, attributed to UAT-10027, High confidence. WannaCry: 65 of 70 vendors, Medium confidence as attribution came only from OTX. Related domain: 16 of 91 vendors flagged it malicious/phishing.",
 rel:"Confidence should depend on how many independent sources agree. Community attribution is weaker than vendor-confirmed attribution.",
 ev:{wu:LINKEDIN_POST}},
{t:"SOC L1 Skills Lab: Risk, Log Investigation & Triage (NexaPay)",c:"Triage & GRC",
 what:"Combined GRC, Windows log analysis and triage-decision exercises built around a fictional fintech, NexaPay.",
 why:"L1 work takes more than tools: understanding why controls exist, reading logs as evidence and deciding under pressure. I also wanted to connect my detection work (e.g. T1110) to governance and triage.",
 obj:"Apply GRC concepts to NexaPay, reconstruct an attack from Windows Security logs, and practise triage, escalation and handover decisions.",
 tools:["NIST CSF","ISO/IEC 27001 Annex A","PCI-DSS","Three Lines of Defense","Likelihood × Impact scoring","Windows Event IDs 4624/4625/4672/4688/4720/4732","MITRE ATT&CK"],
 did:["Compared the three frameworks, placed SOC roles in the Three Lines model, built a six-item risk register and mapped controls to NIST CSF and ISO 27001.","Drafted an MFA policy section and ranked likely audit findings.","Built an attack timeline from FIN-WS-014 logs: six failed logons against svc_backup from 203.0.113.45, RDP logon, privilege assignment, net.exe adding to Administrators, whoami /all, and creation of helpdesk_tmp.","Mapped six ATT&CK techniques and proposed three detection improvements.","Ranked four simultaneous alerts, closed an impossible-travel alert as a false positive with a documented trail, and wrote a shift handover note."],
 skills:["Risk scoring","Windows log forensics","Alert prioritisation","Clear documentation"],
 out:"Missing MFA on the admin portal was the most severe audit gap. The logs showed a full chain: brute force, successful RDP logon, privilege escalation and persistence.",
 rel:"GRC, detection and triage depend on each other. Clear notes let the next analyst or an auditor trust a decision without redoing the work.",
 ev:{wu:LINKEDIN_POST}},
{t:"Automated SOC Response Pipeline (Wazuh + n8n + Gemini)",c:"Automation",
 what:"End-to-end SOAR pipeline that detects SSH brute-force attacks, classifies them with AI and responds by severity.",
 why:"I wanted to move from detecting threats to responding automatically, using my engineering background in workflows and APIs, and to see where automation helps a SOC and where a human must decide.",
 obj:"Wazuh detects the attack, n8n receives the alert, Gemini classifies it, and the workflow responds by severity, tested with live attack traffic.",
 tools:["Wazuh Manager (rule 5763 + integration script)","n8n cloud (Webhook, Switch, SSH, Email, Sheets nodes)","Gemini API with response schema","Kali (attacker)","Ubuntu (target)","iptables"],
 did:["Configured Wazuh to post matching alerts to an n8n webhook and normalised the payload into six fields.","Called Gemini with a schema forcing structured JSON (attack type, severity, confidence, action, summary).","Routed High/Medium/Low through a Switch node, with a fallback to human notification.","Built responses: SSH iptables block for High, email for Medium and Low, Sheets logging for Low.","Tested with a live brute-force attack from Kali and debugged integration faults from logs."],
 skills:["SOAR design","Structured AI output","API integration","Log-based debugging"],
 out:"Wazuh raised rule 5763 (level 10); Gemini classified it SSH Brute Force, High, confidence 0.95; the workflow took the High branch, triggering the SSH block and email notification.",
 rel:"Falling back to human notification is safer than unattended action. Real integrations fail in practical ways: rule ID mismatches, model deprecation, payload assumptions and cloud tools unable to reach private IPs.",
 ev:{wu:LINKEDIN_POST}}
];


/* ============ helpers ============ */
const $ = s => document.querySelector(s);
const tags = a => `<div class="tags">${a.map(x=>`<span class="tag">${x}</span>`).join("")}</div>`;
const list = a => `<ul>${a.map(x=>`<li>${x}</li>`).join("")}</ul>`;
const blk = (h,b) => `<div class="blk"><h5>${h}</h5>${b}</div>`;
const ext = (label,url) => url ? `<a class="btn" href="${url}" target="_blank" rel="noopener">${label} ↗</a>` : "";  // no link = no button
const ph = t => `<div class="note">PLACEHOLDER: ${t}</div>`;

/* ============ projects ============ */
const cats = ["All",...new Set(P.map(p=>p.c))];
$("#filters").innerHTML = cats.map((c,i)=>`<button class="chip${i?"":" on"}" data-c="${c}">${c}</button>`).join("");
function renderProjects(f="All"){
  $("#projGrid").innerHTML = P.map((p,i)=>({p,i})).filter(o=>f==="All"||o.p.c===f).map(({p,i})=>
   `<button class="card reveal" data-i="${i}"><span class="n">PROJECT ${String(i+1).padStart(2,"0")} · ${p.c.toUpperCase()}</span><h4>${p.t}</h4><p>${p.what}</p>${tags(p.tools.slice(0,4))}<span class="more">Open case study →</span></button>`).join("");
  observe();
}
$("#filters").onclick = e => { const b=e.target.closest(".chip"); if(!b)return;
  document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x===b)); renderProjects(b.dataset.c); };

/* ============ modal ============ */
let lastFocus;
function openProject(i){
  const p=P[i], e=p.ev;
  $("#mBody").innerHTML = `<span class="n" style="font:12px var(--mono);color:var(--ac)">PROJECT ${String(i+1).padStart(2,"0")} · ${p.c.toUpperCase()}</span>
  <h2 id="mTitle">${p.t}</h2><p class="lede">${p.what}</p>
  <div class="two-col">${blk("Why I built it",`<p>${p.why}</p>`)}${blk("Objective",`<p>${p.obj}</p>`)}</div>
  ${blk("Tools & technologies",tags(p.tools))}
  ${blk("What I actually did",list(p.did))}
  <div class="two-col">${blk("Skills developed",tags(p.skills))}${blk("Real-world relevance",`<p>${p.rel}</p>`)}</div>
  ${blk("Outcome",`<p class="outcome">${p.out}</p>`)}
  ${(e.gh||e.shots||e.wu||e.demo||e.docs)?blk("Evidence",`<div class="ev">${ext("GitHub repository",e.gh)}${ext("Screenshots",e.shots)}${ext("Write-up (screenshots & proof inside)",e.wu)}${ext("Demo",e.demo)}${ext("Technical docs",e.docs)}</div>`):""}`;
  lastFocus=document.activeElement; $("#modal").hidden=false; document.body.style.overflow="hidden"; $("#mClose").focus();
}
function closeModal(){ $("#modal").hidden=true; document.body.style.overflow=""; lastFocus&&lastFocus.focus(); }
$("#projGrid").onclick = e => { const c=e.target.closest(".card"); if(c) openProject(+c.dataset.i); };
$("#mClose").onclick = closeModal;
$("#modal").onclick = e => { if(e.target.id==="modal") closeModal(); };
document.addEventListener("keydown",e=>{ if(e.key==="Escape"&&!$("#modal").hidden) closeModal(); });

/* ============ other sections ============ */
$("#learnGrid").innerHTML = `
 <div class="card reveal"><span class="n">HANDS-ON PLATFORM</span><h4>TryHackMe</h4><p>Guided, hands-on rooms covering practical security skills.</p>
  <div class="meta"><div><b>Rooms completed:</b> <span>[ADD NUMBER]</span></div><div><b>Areas covered:</b> <span>[ADD AREAS, e.g. SOC, networking, Linux]</span></div></div>
  ${ph("Add your room count and areas.")}<div class="ev">${ext("TryHackMe profile",TRYHACKME)}${ext("Selected write-ups")}</div></div>
 <div class="card reveal"><span class="n">GUIDED CAREER PATHS · JUL 2026</span><h4>LetsDefend: SIEM Engineer, Wazuh &amp; Splunk Engineer</h4><p>Hands-on blue-team paths completed on LetsDefend. Listed here as practical training, not as industry certifications.</p>
  ${tags(["Splunk & Wazuh setup","Log collection & parsing","Detection engineering","Wireshark / IOC extraction","Alert tuning"])}
  <p>Built a method for reducing noisy alerts so analysts focus on genuine threats.</p>
  <div class="ev">${ext("SIEM Engineer","https://app.letsdefend.io//my-rewards/detail/4e2b3f4a-5d2d-42df-86d4-53a8ff1871fd")}${ext("Wazuh","https://app.letsdefend.io//my-rewards/detail/efc239966b914c5ca8f7bfe53ce84f38")}${ext("Splunk Engineer","https://app.letsdefend.io//my-rewards/detail/55817f8998594c5596ed2f99807ab86a")}</div></div>
`;

$("#certGrid").innerHTML = `
 <div class="card reveal"><span class="n">CERTIFIED · ISSUED JUL 2026 · EXPIRES JUL 2029</span><h4>CompTIA Security+ ce</h4>
  <p><b>Why:</b> To build a solid foundation in security fundamentals while moving from software engineering into SOC and blue-team roles, validated by a recognised certification.</p>
  ${tags(["Access control","Cryptography","Threat detection & analysis","Network security","Incident response","Security operations","Risk management"])}
  <div class="ev">${ext("Credential on Credly","https://www.credly.com/badges/ddad0bc7-47b2-43d0-93e9-e0e15afc615c/linked_in_profile")}</div></div>
 <div class="card reveal"><span class="n">EVERHACK · ISSUED SEP 2025</span><h4>Web Pentesting Workshop</h4>
  <p>Workshop-based introduction to web application penetration testing.</p>${tags(["Penetration testing","Cybersecurity"])}
  <p class="cid">Credential ID: b26542a6-fe42-4d1c-8f05-53e7b2aa740d</p></div>
 <div class="card reveal"><span class="n">CISCO NETWORKING ACADEMY</span><h4>Networking Basics</h4>
  <p>Networking foundations that support packet and traffic analysis work.</p>${tags(["Networking fundamentals","Protocols & services"])}</div>
 <div class="card reveal"><span class="n">GOOGLE · ISSUED OCT 2023</span><h4>Crash Course on Python</h4>
  <p>Python fundamentals, the base for my scripting and tooling projects.</p>${tags(["Python"])}
  <p class="cid">Credential ID: KQBJF5TEFJ9F</p></div>`;

$("#stats").innerHTML = [["12","Hands-on projects"],["5","Wazuh-based labs"],["Security+","CompTIA certified"],["SIEM Path","LetsDefend completed"]].map(s=>`<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");

/* ============ UI behaviour ============ */
$("#yr").textContent = new Date().getFullYear();
const burger=document.querySelector(".burger"), menu=$("#menu");
burger.onclick=()=>{ const o=menu.classList.toggle("open"); burger.setAttribute("aria-expanded",o); };
menu.onclick=e=>{ if(e.target.tagName==="A") menu.classList.remove("open"); };

let io;
function observe(){
  const els=document.querySelectorAll(".reveal:not(.in)");
  if(!("IntersectionObserver" in window)){ els.forEach(x=>x.classList.add("in")); return; }
  io = io || new IntersectionObserver(en=>en.forEach(x=>{ if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target);} }),{threshold:.1});
  els.forEach(x=>io.observe(x));
}

/* hero terminal */
const lines=[
 ["$ tail -f /var/ossec/logs/alerts/alerts.log",""],
 ["[decode] ","g","srcip=203.0.113.45 dstuser=root"],
 ["[correlate] ","y","6 auth failures / 60s"],
 ["[alert] ","r","rule 100020 · SSH brute force · T1110"],
 ["[triage] ","g","classify → severity: HIGH"],
 ["[respond] ","g","block src · notify analyst"]
];
const out=$("#typed");
function esc(s){return s.replace(/</g,"&lt;");}
function paint(n){ out.innerHTML=lines.slice(0,n).map(l=>l[1]===""?esc(l[0]):`${esc(l[0])}<span class="${l[1]}">${esc(l[2])}</span>`).join("\n")+'<span class="g">▍</span>'; }
if(matchMedia("(prefers-reduced-motion: reduce)").matches){ paint(lines.length); }
else { let n=0; paint(0); const t=setInterval(()=>{ paint(++n); if(n>=lines.length) clearInterval(t); },700); }

renderProjects();
document.querySelectorAll("section .grid:not(#projGrid) .reveal").length; observe();
