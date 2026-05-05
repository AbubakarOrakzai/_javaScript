// ============================================================
// WEB TECHNOLOGIES - GRADED ASSIGNMENT 3
// Intrusion Detection System (IDS) for Full Stack Web Application
// ============================================================

// -------------------- GIVEN LOGIN DATA --------------------
const loginLogs = [
  { username: "ali", ip: "192.168.1.2", status: "failed" },
  { username: "sara", ip: "192.168.1.3", status: "success" },
  { username: "ali", ip: "192.168.1.2", status: "failed" },
  { username: "john", ip: "10.0.0.5", status: "failed" },
  { username: "ali", ip: "192.168.1.2", status: "failed" },
  { username: "sara", ip: "192.168.1.4", status: "failed" },
  { username: "john", ip: "10.0.0.5", status: "success" },
  { username: "mike", ip: "172.16.0.2", status: "failed" },
  { username: "mike", ip: "172.16.0.2", status: "failed" },
  { username: "mike", ip: "172.16.0.2", status: "failed" },
  { username: "sara", ip: "192.168.1.4", status: "success" },
];

// ==================== TASK 1: LOG ANALYSIS  ====================
// Function to analyze login logs - returns object with:
// - totalSuccess: total successful logins
// - totalFailed: total failed logins  
// - attemptsPerUser: object with attempt counts per user

const analyzeLogs = (logs) => {

  const result = logs.reduce((acc, log) => {
    // Count total success/failed
    if (log.status === "success") acc.totalSuccess++;
    else if (log.status === "failed") acc.totalFailed++;
    
    // Count attempts per user (dynamic - works for any number of records)
    acc.attemptsPerUser[log.username] = (acc.attemptsPerUser[log.username] || 0) + 1;
    
    return acc;
  }, { totalSuccess: 0, totalFailed: 0, attemptsPerUser: {} });
  
  return result;
};

// ==================== TASK 2: SUSPICIOUS BEHAVIOR DETECTION (5 Marks) ====================
// 1: Brute Force Attack (3+ failed logins)
 //2: IP Hopping (multiple IP addresses per user)

const detectSuspiciousUsers = (logs) => {
 
  const userBehavior = {};
  logs.forEach(({ username, ip, status }) => {
    if (!userBehavior[username]) {
      userBehavior[username] = {
        failedCount: 0,
        uniqueIPs: new Set(), 
      };
    }
    
    if (status === "failed") userBehavior[username].failedCount++;
    userBehavior[username].uniqueIPs.add(ip);
  });
  
 
  const suspiciousUsers = {};
  
  for (const [username, behavior] of Object.entries(userBehavior)) {
    const reasons = [];
    
   
    if (behavior.failedCount >= 3) {
      reasons.push("Brute Force Suspect");
    }
    
    if (behavior.uniqueIPs.size > 1) {
      reasons.push("IP Hopping Suspect");
    }
    
    if (reasons.length > 0) {
      suspiciousUsers[username] = reasons;
    }
  }
  
  return suspiciousUsers;
};

// ==================== TASK 3: RISK SCORE CALCULATION ====================
// Weights: Failed Login = +2, Successful Login = +1, IP Change = +3

const calculateRiskScores = (logs) => {
  const userRiskData = {};
  
  logs.forEach(({ username, ip, status }) => {
    if (!userRiskData[username]) {
      userRiskData[username] = {
        failedLogins: 0,
        successLogins: 0,
        ipAddresses: new Set(),
        riskScore: 0
      };
    }
    
    if (status === "failed") userRiskData[username].failedLogins++;
    if (status === "success") userRiskData[username].successLogins++;
    userRiskData[username].ipAddresses.add(ip);
  });
  
  const riskScores = {};
  
  for (const [username, data] of Object.entries(userRiskData)) {
    const ipChangeCount = data.ipAddresses.size;
    const score = (data.failedLogins * 2) + (data.successLogins * 1) + (ipChangeCount * 3);
    riskScores[username] = score;
  }
  
  return riskScores;
};

const getTopRiskUsers = (riskScores, topCount = 2) => {
  return Object.entries(riskScores)
    .sort((a, b) => b[1] - a[1])  
    .slice(0, topCount);
};

// ==================== TASK 4: SECURITY REPORT  ====================
const generateSecurityReport = () => {
  const { totalSuccess, totalFailed, attemptsPerUser } = analyzeLogs(loginLogs);
  const suspiciousUsers = detectSuspiciousUsers(loginLogs);
  
  const riskScores = calculateRiskScores(loginLogs);
  const topRiskUsers = getTopRiskUsers(riskScores, 2);
  
  console.log("\n" + "=".repeat(60));
  console.log("SECURITY REPORT - INTRUSION DETECTION SYSTEM");
  console.log("=".repeat(60));
  console.log("\n HIGH RISK USERS:");
  topRiskUsers.forEach(([username, score], index) => {
    console.log(`  ${index + 1}. ${username} (Risk Score: ${score})`);
  });
  
  console.log("\n USER RISK SCORES:");
  for (const [username, score] of Object.entries(riskScores)) {
    console.log(`  ${username}: ${score}`);
  }
  
  console.log("\n SUSPICIOUS USERS DETECTED:");
  for (const [username, reasons] of Object.entries(suspiciousUsers)) {
    console.log(`  ${username} → ${reasons.join(" & ")}`);
  }
  
  console.log("\n LOGIN ATTEMPTS PER USER:");
  for (const [username, count] of Object.entries(attemptsPerUser)) {
    console.log(`  ${username}: ${count}`);
  }
  
  console.log("\n LOGIN SUMMARY:");
  console.log(`  Total Success Logins: ${totalSuccess}`);
  console.log(`  Total Failed Logins: ${totalFailed}`);

  console.log("\n RECOMMENDED SECURITY ACTIONS:");
  console.log("  1. Lock accounts after 3 failed attempts (Brute Force Protection)");
  console.log("  2. Implement Multi-Factor Authentication (MFA) for all users");
  console.log("  3. Monitor suspicious IP addresses with rate limiting");
  console.log("  4. Alert security team on IP Hopping behavior detection");
  console.log("  5. Implement progressive delay on repeated failures");
  
  console.log("\n" + "=".repeat(60));
  console.log("END OF SECURITY REPORT");
  console.log("=".repeat(60) + "\n");
  
  return {
    totalSuccess,
    totalFailed,
    attemptsPerUser,
    suspiciousUsers,
    riskScores,
    topRiskUsers
  };
};

// ==================== CONCEPTUAL EXPLANATION ====================
/**
 * WHY BRUTE FORCE ATTACKS ARE DANGEROUS:
 * Brute force attacks systematically try many password combinations to gain unauthorized access.
 * They are dangerous because:
 * 1. Automation allows thousands of attempts per second
 * 2. Weak passwords can be cracked within minutes/hours
 * 3. Successful breach gives attackers full account access
 * 4. Can lead to data theft, financial fraud, or further system compromise
 * 5. Often used as entry point for larger attacks (lateral movement)
 * 
 * WHY IP HOPPING MAY INDICATE ACCOUNT COMPROMISE:
 * IP hopping (login from multiple different IP addresses) is suspicious because:
 * 1. Legitimate users typically login from consistent locations (home/work)
 * 2. Rapid IP changes suggest use of proxy chains or VPN hopping by attackers
 * 3. May indicate credentials are shared among multiple malicious actors
 * 4. Could be signs of session hijacking from different geographic locations
 * 5. Often correlates with credential stuffing attacks using proxy lists
 */

// ==================== MAIN EXECUTION ====================
console.log("\n INITIALIZING INTRUSION DETECTION SYSTEM...");
console.log(` Processing ${loginLogs.length} login records...`);

const reportData = generateSecurityReport();

console.log(" IDS System ready. The same logic works for 100+ records or live API data.");
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    analyzeLogs,
    detectSuspiciousUsers,
    calculateRiskScores,
    getTopRiskUsers,
    generateSecurityReport
  };
}

