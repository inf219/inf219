import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

export function initializeDatabase() {
    db.serialize(() => {
        db.run(`
            CREATE TABLE user_agent_mapping (
                user_id TEXT NOT NULL,
                agent_id TEXT NOT NULL
            )
        `);
    });
}

export function saveMapping(userId: string, agentId: string): Promise<void> {
    return new Promise((resolve, reject) => {
        db.run(
            `INSERT INTO user_agent_mapping (user_id, agent_id) VALUES (?, ?)`,
            [userId, agentId],
            (err) => {
                if (err) reject(err);
                else resolve();
            }
        );
    });
}

export function getMapping(userId: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
        db.get(
            `SELECT agent_id FROM user_agent_mapping WHERE user_id = ?`,
            [userId],
            (err, row: { agent_id: string } | undefined) => {
                if (err) reject(err);
                else resolve(row ? row.agent_id : null);
            }
        );
    });
}

export function getAllMappings(): Promise<{ user_id: string; agent_id: string }[]> {
    return new Promise((resolve, reject) => {
        db.all(`SELECT user_id, agent_id FROM user_agent_mapping`, [], (err, rows) => {
            if (err) reject(err);
            else resolve(rows as { user_id: string; agent_id: string }[]);
        });
    });
}