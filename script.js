const projects = [
  {
    id: 1, title: "Router Telemetry Pipeline & SSH Brute-Force Detection", category: "detection", categoryLabel: "Detection engineering",
    summary: "A live OpenWrt-to-Wazuh pipeline with custom parsing and a rule for high-frequency SSH authentication failures.",
    objective: "Bridge brute-force theory and detection on real router hardware, then deliver clean telemetry and actionable alerts.",
    why: "To test detection against real traffic instead of relying only on a simulated environment.",
    tools: ["OpenWrt", "Wazuh", "syslog / UDP 514", "tcpdump", "Python", "Paramiko", "XML rules", "MITRE ATT&CK T1110"],
    work: ["Configured router syslog transport and verified packet flow at the edge with tcpdump.", "Tested custom decoders to extract fields such as srcip and dstuser.", "Emulated SSH brute-force attempts with a Paramiko script.", "Wrote custom rule 100020 in botnet.xml to catch authentication spikes and close a coverage gap."],
    skills: ["Syslog ingestion and troubleshooting", "Decoder testing and field extraction", "Detection-rule authoring", "Controlled attack simulation"],
    outcome: "A working log → decode → correlate → alert pipeline validated against live, emulated attacks.",
    relevance: "SOC detection depends on reliable telemetry and correctly parsed fields. This project demonstrates the path from authentication events to a mapped brute-force alert.",
    learned: "Detection is only as good as the parsing behind it: field extraction comes before correlation, which comes before alerting.",
    evidence: [{label:"GitHub repository",url:"https://github.com/annus-jawad/Detection-Engineering-Lab"},{label:"Write-up",url:"https://lnkd.in/p/dnVUd98n"}],
    tags:["Wazuh","OpenWrt","SSH","MITRE ATT&CK"]
  },
  {
    id: 2, title: "Living-off-the-Land Detection with Wazuh & Sysmon", category: "detection", categoryLabel: "Endpoint detection",
    summary: "A home detection lab investigating suspicious use of native Windows binaries such as cipher.exe.",
    objective: "Detect suspicious native-binary execution with custom Wazuh rules mapped to MITRE ATT&CK.",
    why: "To understand how attackers can misuse built-in tools and how endpoint telemetry can be turned into useful alerts.",
    tools:["Wazuh SIEM/XDR","Sysmon","Custom XML rules","MITRE ATT&CK","Virtualized lab"],
    work:["Deployed Sysmon for process creation, network connection, and registry-change visibility.","Simulated living-off-the-land behavior in a controlled lab.","Wrote custom XML rules to alert on suspicious binary execution.","Used if_sid mappings to align rules with parsed Sysmon events and reduce false positives."],
    skills:["Windows endpoint telemetry","Custom detection rules","ATT&CK mapping","Alert tuning"],
    outcome:"Custom rules that alert on living-off-the-land activity with less noise in the dashboard.",
    relevance:"Native binaries can be abused without introducing unfamiliar executables. Endpoint telemetry and tuned detections help analysts identify suspicious use.",
    learned:"Log normalization and tuning matter as much as the rule itself; alerts must become actionable investigation context.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dYqbptza"}],
    tags:["Wazuh","Sysmon","LOLBins","ATT&CK"]
  },
  {
    id: 3, title: "Wazuh SIEM/XDR Lab with File Integrity Monitoring", category: "detection", categoryLabel: "SIEM / monitoring",
    summary: "A virtualized Linux/Windows monitoring lab with Wazuh agents and real-time file integrity alerts.",
    objective: "Build a stable monitoring environment with proactive controls such as File Integrity Monitoring (FIM).",
    why: "To learn threat detection and incident-response operations from the ground up rather than only from documentation.",
    tools:["Wazuh manager and agents","Linux and Windows VMs","Virtual network adapters","File Integrity Monitoring"],
    work:["Troubleshot agent-manager connectivity across virtual adapters.","Configured network interfaces for communication inside a locked-down virtual network.","Handled environment configuration and registry cleanup during deployment.","Enabled FIM to detect unauthorized file changes in real time."],
    skills:["SIEM deployment","Agent connectivity troubleshooting","Virtual networking","FIM configuration"],
    outcome:"A working lab producing FIM alerts when monitored endpoint files change.",
    relevance:"FIM can help surface unexpected changes to monitored files and supports endpoint monitoring and investigation workflows.",
    learned:"Operational security includes keeping infrastructure healthy and ensuring telemetry reaches the monitoring platform.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dQXnK-Aq"}],
    tags:["Wazuh","FIM","Linux","Windows"]
  },
  {
    id: 4, title: "Python Network Sniffer", category: "network", categoryLabel: "Network analysis",
    summary: "A command-line packet capture and analysis tool that presents protocol-specific details in a readable live table.",
    objective: "Capture live network traffic and display useful fields for TCP, UDP, ICMP, and ARP.",
    why: "To observe how packets move through a network instead of learning protocols only from diagrams and theory.",
    tools:["Python","Scapy","Npcap","BPF filters"],
    work:["Built a protocol dispatcher for TCP, UDP, ICMP, and ARP handlers.","Extracted TCP sequence/acknowledgment numbers, ARP hardware addresses, and ICMP type/code.","Resolved ports to service names and IP addresses to hostnames, with caching.","Added BPF filters such as tcp, port 80, and host <ip>; formatted output as a live packet table."],
    skills:["Packet capture","Protocol parsing","BPF filtering","Python CLI tooling"],
    outcome:"A working CLI sniffer that parses and displays live traffic.",
    relevance:"Packet-level visibility helps troubleshoot networks and gives analysts context when investigating suspicious or unexpected traffic.",
    learned:"Inspecting sequence numbers in a live TCP handshake provides practical understanding beyond describing the handshake on paper.",
    evidence:[{label:"GitHub repository",url:"https://github.com/annus-jawad/Network-sniffer"}],
    tags:["Python","Scapy","TCP/IP","Packet capture"]
  },
  {
    id: 5, title: "Network Traffic Analysis, Email Forensics & Port Scanning", category: "network", categoryLabel: "Traffic analysis",
    summary: "Three blue-team exercises: packet filtering, SMTP evidence recovery from a capture, and Nmap scan interpretation.",
    objective: "Filter traffic, reconstruct an SMTP session from a practice capture, and interpret local and remote scan results.",
    why: "To practice packet inspection, evidence recovery, and exposed-service discovery within one documented workflow.",
    tools:["Wireshark 4.6.4","Nmap 7.98","Kali Linux","Python 3","Base64","md5sum"],
    work:["Captured 278 packets on a personal Wi-Fi interface and inspected TCP, HTTP, DNS, IP, port, and GET traffic.","Followed SMTP streams in the practice capture “Ann’s Rendezvous,” decoded Base64 credentials, extracted an attachment with Python, and hashed it.","Inspected a DOCX archive to locate an embedded map image and meeting location.","Scanned own machine (no open ports) and an authorized host (ports 22, 80, 443, 8443 open)."],
    skills:["Wireshark filtering","SMTP stream analysis","Attachment extraction and hashing","Nmap interpretation"],
    outcome:"A documented investigation tracing plaintext SMTP to credentials, an attachment, its hash and location, alongside two scan results.",
    relevance:"Packet analysis can reveal exposed plaintext protocols and connect network evidence to files or services that require further investigation.",
    learned:"TLS hides application content; plaintext SMTP can expose it. Base64 is encoding, not encryption, and open ports represent attack surface.",
    evidence:[{label:"GitHub repository",url:"https://github.com/annus-jawad/Network-Traffic-Analysis-Email-Forensics-Host-Reconnaissance"}],
    tags:["Wireshark","Nmap","SMTP","Forensics"]
  },
  {
    id: 6, title: "FAT32 Data Recovery Lab", category: "forensics", categoryLabel: "Digital forensics",
    summary: "A controlled comparison of Recuva and PhotoRec across delete, Shift+Delete, and quick-format scenarios.",
    objective: "Compare recovery outcomes and verify recovered files against pre-deletion SHA-256 hashes.",
    why: "To understand how deletion and quick formatting affect recovery, and why some recovery attempts fail or alter files.",
    tools:["Windows 11","Recuva","PhotoRec / TestDisk","PowerShell Get-FileHash","SHA-256"],
    work:["Recorded SHA-256 hashes for three test files: text, PDF, and JPEG.","Ran normal delete, Shift+Delete, and quick-format scenarios, then attempted recovery with both tools.","Saved recovered files to a different drive to avoid writing to the test USB.","Verified recovery by hash and investigated a 104-byte mismatch in a Recuva-recovered JPEG."],
    skills:["File recovery testing","Hash-based integrity verification","Evidence preservation","Tool-result comparison"],
    outcome:"Six of ten recovery attempts succeeded. Five recovered files were byte-identical; the sixth contained the original data plus 104 bytes of padding.",
    relevance:"Forensic recovery requires preserving source media and verifying recovered artefacts, rather than assuming a tool's success message proves file integrity.",
    learned:"Deletion often changes metadata rather than immediately erasing content; carving can lose filenames and may not identify plain text.",
    evidence:[{label:"GitHub repository",url:"https://github.com/annus-jawad/Digital-Forensics-"}],
    tags:["PhotoRec","Recuva","SHA-256","FAT32"]
  },
  {
    id: 7, title: "Credit Card Fraud Detection with Machine Learning", category: "automation", categoryLabel: "Data / machine learning",
    summary: "A fraud-detection pipeline evaluated against a highly imbalanced dataset of 284,807 transactions.",
    objective: "Handle class imbalance and compare models using metrics meaningful when fraud is rare.",
    why: "To work through a full ML workflow where misleading accuracy can conceal poor detection of the minority class.",
    tools:["Python","Jupyter","pandas","scikit-learn","imbalanced-learn / SMOTE","XGBoost","matplotlib / seaborn"],
    work:["Explored the dataset and performed a stratified split before scaling or resampling to avoid leakage.","Compared SMOTE and class weighting on training data only.","Trained Logistic Regression, Random Forest, and XGBoost against the same untouched test set.","Evaluated precision, recall, F1, PR-AUC, confusion matrices, thresholds, and feature importance."],
    skills:["Imbalanced classification","Leakage prevention","Model evaluation","Threshold analysis"],
    outcome:"Tree-based models reached approximately 0.86–0.88 PR-AUC versus 0.72–0.75 for Logistic Regression. XGBoost trained in 3 seconds versus 25 seconds for Random Forest. Results remain tentative because the test set contained 98 fraud cases.",
    relevance:"Security analytics and fraud detection often involve rare positive events; model evaluation must prioritize minority-class performance and threshold trade-offs.",
    learned:"Accuracy is misleading on imbalanced data: predicting every transaction as legitimate would still score 99.83%.",
    evidence:[{label:"GitHub repository",url:"https://github.com/annus-jawad/Machine-Learning-Pipeline-for-Extreme-Imbalance-Credit-Card-Fraud-Detection"}],
    tags:["Python","XGBoost","SMOTE","PR-AUC"]
  },
  {
    id: 8, title: "SOC Home Lab: Kali Linux & Wazuh on VMware", category: "detection", categoryLabel: "SOC foundations",
    summary: "An isolated virtual SOC environment with Kali Linux, Wazuh services, and an active agent reporting test events.",
    objective: "Build a virtual lab where a Kali agent reports to the Wazuh dashboard across a configured NAT network.",
    why: "To create a working environment for SOC L1 and blue-team practice, which later supported more focused projects.",
    tools:["VMware Workstation Pro","VMware Virtual Network Editor","Kali Linux","Wazuh OVA","Wazuh Agent"],
    work:["Enabled hardware virtualization and configured a NAT network.","Installed and updated Kali, then saved a clean-install snapshot.","Imported the Wazuh OVA and verified manager, indexer, and dashboard services.","Confirmed VM connectivity, installed the Wazuh agent on Kali, and generated a test security event."],
    skills:["Virtual lab design","SIEM component troubleshooting","Agent deployment","End-to-end telemetry validation"],
    outcome:"A working Kali-to-Wazuh lab where the agent was active and a test event appeared in the dashboard.",
    relevance:"SOC workflows depend on each part of the telemetry chain functioning: network reachability, services, agent state, and event ingestion.",
    learned:"Troubleshooting is faster when each layer is checked in order rather than treating every missing dashboard event as the same failure.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dKgTwxyE"}],
    tags:["Wazuh","VMware","Kali Linux","SOC"]
  },
  {
    id: 9, title: "Network Security Monitoring with Suricata & Zeek", category: "network", categoryLabel: "Network monitoring",
    summary: "An Ubuntu monitoring lab combining Suricata detection/prevention with Zeek's passive network logs.",
    objective: "Deploy both tools, author test rules, and correlate alerts with Zeek logs to distinguish real findings from false positives.",
    why: "To practice a SOC-style investigation in which an alert is verified and explained using independent network evidence.",
    tools:["Ubuntu Server 24.04.3","VirtualBox","Suricata","Emerging Threats rules","tcpdump","iptables / NFQUEUE","jq","Zeek 7.0","Nmap","curl","nslookup","cron"],
    work:["Built and snapshotted an Ubuntu VM; tested Suricata against a tcpdump PCAP.","Ran Suricata in IDS mode and then IPS mode using iptables and NFQUEUE.","Wrote rules for Facebook and YouTube traffic, TLS SNI detection, and dropping Facebook traffic.","Parsed eve.json with jq and automated daily rule updates with cron.","Installed Zeek; examined HTTP, DNS, a sample PCAP, and an Nmap SYN scan; correlated Suricata alerts with conn, http, dns, files, and weird logs."],
    skills:["IDS/IPS testing","Rule writing","Network log correlation","False-positive validation","Linux troubleshooting"],
    outcome:"The Facebook drop rule blocked browser traffic. Zeek showed an Nmap scan touching 1,000 unique ports in about one second. A testmyids.com alert was correlated across tools and confirmed as an intentional false positive.",
    relevance:"Suricata identifies patterns and can enforce blocking; Zeek adds protocol-level context that helps analysts investigate and validate alerts.",
    learned:"Encrypted traffic limits content matching, while TLS SNI may remain visible. NFQUEUE enables Suricata IPS enforcement; correlating tools can expose false positives.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dKgTwxyE"}],
    tags:["Suricata","Zeek","IDS/IPS","Network logs"]
  },
  {
    id: 10, title: "Threat Intelligence: Dohdoor / UAT-10027 & WannaCry", category: "forensics", categoryLabel: "Threat intelligence",
    summary: "A multi-source assessment of two malicious Windows files, mapping observed behavior to MITRE ATT&CK.",
    objective: "Investigate two file hashes using multiple intelligence sources, map behaviors, and rate confidence in the findings.",
    why: "To practice turning raw detections into context and recommendations using public threat-intelligence resources.",
    tools:["VirusTotal","AlienVault OTX","MITRE ATT&CK Navigator","Cisco Talos / LevelBlue reporting","Imperva reporting"],
    work:["Looked up the Dohdoor / UAT-10027 hash in VirusTotal and pivoted through OTX to a campaign and related phishing domain.","Mapped 13 ATT&CK techniques for Dohdoor / UAT-10027.","Investigated a WannaCry hash and OTX pulses, then mapped 12 ATT&CK techniques.","Drafted mitigations including domain/hash blocking, alerts for side-loaded DLLs, MS17-010 patching, disabling SMBv1, blocking ports 445/139, offline backups, and EDR."],
    skills:["IOC pivots","Source corroboration","ATT&CK mapping","Confidence assessment","Mitigation recommendations"],
    outcome:"Dohdoor was flagged by 44 of 70 vendors and rated high confidence; WannaCry was flagged by 65 of 70 and rated medium confidence due to weaker attribution support. The related domain was flagged by 16 of 91 vendors as malicious/phishing.",
    relevance:"Threat intelligence is most useful when indicators, behavior, independent sources, confidence, and actionable mitigations are documented together.",
    learned:"Confidence should reflect independent corroboration. Community attribution is weaker than vendor-confirmed attribution when the evidence base differs.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dKgTwxyE"}],
    tags:["VirusTotal","OTX","MITRE ATT&CK","IOCs"]
  },
  {
    id: 11, title: "SOC L1 Skills Lab: Risk, Logs & Triage", category: "detection", categoryLabel: "SOC triage / GRC",
    summary: "A combined risk-assessment, Windows event investigation, and alert-triage exercise using a fictional fintech.",
    objective: "Apply GRC concepts, reconstruct activity from Windows Security logs, and practice triage, escalation, and handover.",
    why: "To connect technical detection with control reasoning and documented decisions under operational pressure.",
    tools:["NIST CSF","ISO/IEC 27001 Annex A","PCI-DSS","Three Lines of Defense","Risk scoring","Windows Event IDs","MITRE ATT&CK"],
    work:["Compared frameworks and placed SOC responsibilities within the Three Lines model.","Created a six-item risk register, mapped controls, drafted an MFA policy section, and ranked audit findings.","Reconstructed an attack timeline from failed logons, RDP access, privilege assignment, net.exe group changes, whoami /all, and a new administrator account.","Mapped six ATT&CK techniques, proposed three detection improvements, ranked four simultaneous alerts, documented an impossible-travel false positive, and wrote a shift handover."],
    skills:["Windows log analysis","Attack timeline reconstruction","Risk assessment","Alert prioritization","Handover documentation"],
    outcome:"The missing MFA control on the admin portal was the most severe audit gap. Log evidence showed a chain from brute force to successful RDP logon, privilege escalation, and persistence.",
    relevance:"An L1 analyst must combine event evidence with risk context, prioritization, escalation criteria, and documentation another analyst can trust.",
    learned:"GRC, detection, and triage are connected; clear records allow the next analyst or an auditor to verify a decision without repeating the investigation.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dKgTwxyE"}],
    tags:["Windows Events","GRC","Triage","ATT&CK"]
  },
  {
    id: 12, title: "Automated SOC Response Pipeline: Wazuh + n8n + Gemini", category: "automation", categoryLabel: "SOAR / automation",
    summary: "A severity-routed workflow that receives Wazuh alerts, uses Gemini to classify them, and selects a response path.",
    objective: "Connect Wazuh detection to an n8n workflow, structured AI classification, severity-based routing, and live test traffic.",
    why: "To move from detecting threats to testing automated response, while identifying where human review remains necessary.",
    tools:["Wazuh Manager","Custom integration script","n8n Cloud","Gemini API","Kali Linux","Ubuntu Server","iptables","Email","Google Sheets"],
    work:["Configured Wazuh to send matching alerts to an n8n webhook.","Normalized the payload into six fields.","Called Gemini using a response schema for attack type, severity, confidence, action, and summary.","Routed High, Medium, and Low severity through a Switch node with a human-notification fallback.","Configured an SSH iptables block for High severity, email for Medium/Low, and Google Sheets logging for Low; tested with a live Kali brute-force attempt."],
    skills:["Webhook integration","Structured AI output","Workflow orchestration","Severity-based response","Integration debugging"],
    outcome:"Wazuh raised rule 5763 at level 10; the webhook ran; Gemini classified the event as SSH brute force with High severity and 0.95 confidence; the workflow reached the High branch and triggered the SSH block and email notification nodes.",
    relevance:"SOAR can reduce repetitive handling, but structured inputs, tested integrations, fallback paths, and human oversight are essential to safe response workflows.",
    learned:"Structured output improves automation reliability, and human notification is safer than unattended action when confidence or integration behavior is uncertain.",
    evidence:[{label:"Write-up",url:"https://lnkd.in/p/dKgTwxyE"}],
    tags:["Wazuh","n8n","Gemini API","SOAR"]
  }
];

const grid = document.getElementById("project-grid");
const searchInput = document.getElementById("project-search");
const emptyState = document.getElementById("empty-state");
const filterButtons = [...document.querySelectorAll(".filter-btn")];
const dialog = document.getElementById("project-dialog");
const dialogContent = document.getElementById("dialog-content");
const dialogClose = document.getElementById("dialog-close");
const backdrop = document.getElementById("dialog-backdrop");
let activeFilter = "all";

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
}[char]));

function renderCards() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = projects.filter(project => {
    const categoryMatch = activeFilter === "all" || project.category === activeFilter;
    const searchable = [project.title, project.summary, project.categoryLabel, ...project.tools, ...project.tags].join(" ").toLowerCase();
    return categoryMatch && searchable.includes(term);
  });
  grid.innerHTML = filtered.map(project => `
    <button class="project-card" type="button" data-project-id="${project.id}" aria-label="View details for ${escapeHtml(project.title)}">
      <div class="card-top"><span class="project-number">PROJECT / ${String(project.id).padStart(2,"0")}</span><span class="project-category">${escapeHtml(project.categoryLabel)}</span></div>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      <div class="card-tags">${project.tags.slice(0,4).map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="card-open"><span>Open project details</span><span aria-hidden="true">↗</span></div>
    </button>`).join("");
  emptyState.hidden = filtered.length > 0;
}

function detailList(items) {
  return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function openProject(id) {
  const project = projects.find(item => item.id === Number(id));
  if (!project) return;
  const evidence = project.evidence.length ? `
    <section class="evidence-block">
      <h3>Evidence</h3>
      <div class="evidence-links">${project.evidence.map(item => `<a class="evidence-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer"><span>↗</span>${escapeHtml(item.label)}</a>`).join("")}</div>
    </section>` : "";
  dialogContent.innerHTML = `
    <article class="dialog-body">
      <div class="dialog-title-row"><span class="dialog-index">${String(project.id).padStart(2,"0")} / 12</span><div><h2 id="dialog-title">${escapeHtml(project.title)}</h2><p class="dialog-lead">${escapeHtml(project.summary)}</p></div></div>
      <div class="dialog-tags">${project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="detail-grid">
        <section class="detail-block"><h3>Project & objective</h3><p>${escapeHtml(project.objective)}</p></section>
        <section class="detail-block"><h3>Why I built it</h3><p>${escapeHtml(project.why)}</p></section>
        <section class="detail-block"><h3>Tools & technologies</h3>${detailList(project.tools)}</section>
        <section class="detail-block"><h3>What I did</h3>${detailList(project.work)}</section>
        <section class="detail-block"><h3>Skills developed</h3>${detailList(project.skills)}</section>
        <section class="detail-block"><h3>Outcome</h3><p>${escapeHtml(project.outcome)}</p></section>
        <section class="detail-block"><h3>What I learned</h3><p>${escapeHtml(project.learned)}</p></section>
        <section class="detail-block"><h3>Real-world relevance</h3><p>${escapeHtml(project.relevance)}</p></section>
      </div>
      ${evidence}
      <p class="dialog-footnote">Project details reflect the supplied portfolio document. Evidence buttons use only the URLs provided there.</p>
    </article>`;
  backdrop.hidden = false;
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  if (dialog.open) dialog.close();
  backdrop.hidden = true;
  document.body.classList.remove("dialog-open");
}

filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });
  renderCards();
}));
searchInput.addEventListener("input", renderCards);
grid.addEventListener("click", event => {
  const card = event.target.closest("[data-project-id]");
  if (card) openProject(card.dataset.projectId);
});
dialogClose.addEventListener("click", closeDialog);
backdrop.addEventListener("click", closeDialog);
dialog.addEventListener("close", () => {
  backdrop.hidden = true;
  document.body.classList.remove("dialog-open");
});
dialog.addEventListener("click", event => {
  if (event.target === dialog) closeDialog();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDialog();
});

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}));

renderCards();
