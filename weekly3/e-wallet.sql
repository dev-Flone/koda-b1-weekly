
-- ALTER TABLE users
-- ADD COLUMN name VARCHAR(255) NOT NULL;
-- CREATE TABLE IF NOT EXISTS users (
--     id SERIAL PRIMARY KEY,
--     username VARCHAR(255) UNIQUE NOT NULL,
--     email VARCHAR(255) UNIQUE NOT NULL,
--     phone VARCHAR(20) UNIQUE,
--     photo_url TEXT,
--     status VARCHAR(20) NOT NULL DEFAULT 'active',
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS user_credentials (
--     user_id INT PRIMARY KEY REFERENCES users(id),
--     password_hash VARCHAR(255) NOT NULL,
--     pin_hash VARCHAR(255) NOT NULL,
--     password_changed_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
--     pin_changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS wallets (
--     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     user_id INT NOT NULL REFERENCES users(id),
--     wallet_number VARCHAR(30) UNIQUE NOT NULL,
--     balance BIGINT NOT NULL DEFAULT 0 CHECK (balance >= 0),
--     currency VARCHAR(3) NOT NULL DEFAULT 'IDR',
--     status VARCHAR(20) NOT NULL DEFAULT 'active',
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS sessions (
--     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     user_id INT NOT NULL REFERENCES users(id),
--     token_hash VARCHAR(255) UNIQUE NOT NULL,
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     expired_at TIMESTAMPTZ NOT NULL,
--     revoked_at TIMESTAMPTZ
-- );

-- CREATE TABLE IF NOT EXISTS payment_methods (
--     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     user_id INT NOT NULL REFERENCES users(id),
--     provider VARCHAR(100) NOT NULL,
--     external_reference VARCHAR(255),
--     status VARCHAR(20) NOT NULL DEFAULT 'active',
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE IF NOT EXISTS transactions (
--     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     transaction_code VARCHAR(50) UNIQUE NOT NULL,
--     sender_wallet_id INT REFERENCES wallets(id),
--     receiver_wallet_id INT REFERENCES wallets(id),
--     payment_method_id INT REFERENCES payment_methods(id),
--     amount BIGINT NOT NULL CHECK (amount > 0),
--     fee BIGINT NOT NULL DEFAULT 0 CHECK (fee >= 0),
--     type VARCHAR(20) NOT NULL,
--     status VARCHAR(20) NOT NULL DEFAULT 'pending',
--     description TEXT,
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
--     completed_at TIMESTAMPTZ,

--     CHECK (sender_wallet_id IS DISTINCT FROM receiver_wallet_id)
-- );

-- CREATE TABLE IF NOT EXISTS transaction_details (
--     id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--     transaction_id INT NOT NULL REFERENCES transactions(id),
--     wallet_id INT NOT NULL REFERENCES wallets(id),
--     type VARCHAR(10) NOT NULL,
--     amount BIGINT NOT NULL CHECK (amount > 0),
--     balance_after BIGINT NOT NULL CHECK (balance_after >= 0),
--     created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
-- CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON wallets(user_id);
-- CREATE INDEX IF NOT EXISTS idx_transactions_sender ON transactions(sender_wallet_id);
-- CREATE INDEX IF NOT EXISTS idx_transactions_receiver ON transactions(receiver_wallet_id);
-- CREATE INDEX IF NOT EXISTS idx_transactions_created_at ON transactions(created_at);
-- CREATE INDEX IF NOT EXISTS idx_transaction_details_wallet ON transaction_details(wallet_id);

-- INSERT INTO users (
--     name, username, email, phone, photo_url, status
-- ) VALUES
-- ('Andi Pratama', 'andi', 'andi@example.com', '081234567801', NULL, 'active'),
-- ('Budi Santoso', 'budi', 'budi@example.com', '081234567802', NULL, 'active'),
-- ('Citra Lestari', 'citra', 'citra@example.com', '081234567803', NULL, 'active'),
-- ('Dewi Anggraini', 'dewi', 'dewi@example.com', '081234567804', NULL, 'active'),
-- ('Eko Saputra', 'eko', 'eko@example.com', '081234567805', NULL, 'active');

-- INSERT INTO user_credentials (
--     user_id, password_hash, pin_hash
-- ) VALUES
-- (1, 'hash_password_andi', 'hash_pin_andi'),
-- (2, 'hash_password_budi', 'hash_pin_budi'),
-- (3, 'hash_password_citra', 'hash_pin_citra'),
-- (4, 'hash_password_dewi', 'hash_pin_dewi'),
-- (5, 'hash_password_eko', 'hash_pin_eko');

-- INSERT INTO wallets (
--     user_id, wallet_number, balance, currency, status
-- ) VALUES
-- (1, 'WLT-100001', 450000, 'IDR', 'active'),
-- (2, 'WLT-100002', 115000, 'IDR', 'active'),
-- (3, 'WLT-100003', 700000, 'IDR', 'active'),
-- (4, 'WLT-100004', 300000, 'IDR', 'active'),
-- (5, 'WLT-100005', 50000, 'IDR', 'active');

-- INSERT INTO wallets (
--     user_id, wallet_number, balance, currency, status
-- ) VALUES
-- (1, 'WLT-100001', 450000, 'IDR', 'active'),
-- (2, 'WLT-100002', 115000, 'IDR', 'active'),
-- (3, 'WLT-100003', 700000, 'IDR', 'active'),
-- (4, 'WLT-100004', 300000, 'IDR', 'active'),
-- (5, 'WLT-100005', 50000, 'IDR', 'active');

-- INSERT INTO sessions (
--     user_id, token_hash, expired_at
-- ) VALUES
-- (1, 'session_hash_andi', CURRENT_TIMESTAMP + INTERVAL '1 day'),
-- (2, 'session_hash_budi', CURRENT_TIMESTAMP + INTERVAL '1 day');

-- INSERT INTO payment_methods (
--     user_id, provider, external_reference, status
-- ) VALUES
-- (1, 'Bank BCA', 'BCA-ANDI-001', 'active'),
-- (2, 'Bank Mandiri', 'MANDIRI-BUDI-001', 'active'),
-- (3, 'Bank BNI', 'BNI-CITRA-001', 'active');

-- INSERT INTO transactions (
--     transaction_code,
--     sender_wallet_id,
--     receiver_wallet_id,
--     payment_method_id,
--     amount,
--     fee,
--     type,
--     status,
--     description,
--     completed_at
-- ) VALUES
-- (
--     'TRX-0001', 1, 2, NULL,
--     50000, 0, 'transfer', 'success',
--     'Transfer dari Andi ke Budi', CURRENT_TIMESTAMP - INTERVAL '3 days'
-- ),
-- (
--     'TRX-0002', NULL, 1, 1,
--     100000, 0, 'top_up', 'success',
--     'Top up saldo Andi', CURRENT_TIMESTAMP - INTERVAL '2 days'
-- ),
-- (
--     'TRX-0003', 1, 3, NULL,
--     25000, 0, 'transfer', 'success',
--     'Transfer dari Andi ke Citra', CURRENT_TIMESTAMP - INTERVAL '1 day'
-- ),
-- (
--     'TRX-0004', 4, 1, NULL,
--     75000, 0, 'transfer', 'success',
--     'Transfer dari Dewi ke Andi', CURRENT_TIMESTAMP
-- );

-- INSERT INTO transaction_details (
--     transaction_id, wallet_id, type, amount, balance_after
-- ) VALUES
-- -- TRX-0001: Andi mengirim ke Budi
-- (1, 1, 'debit', 50000, 400000),
-- (1, 2, 'credit', 50000, 165000),

-- -- TRX-0002: Andi melakukan top up
-- (2, 1, 'credit', 100000, 500000),

-- -- TRX-0003: Andi mengirim ke Citra
-- (3, 1, 'debit', 25000, 475000),
-- (3, 3, 'credit', 25000, 725000),

-- -- TRX-0004: Dewi mengirim ke Andi
-- (4, 4, 'debit', 75000, 225000),
-- (4, 1, 'credit', 75000, 550000);

-------------------------------------------------------------------------------------


-- 01 Register user

WITH new_user AS (
    INSERT INTO users (name, username, email, phone, status) VALUES
    ('Fajar Ramadhan', 'fajar', 'fajar@example.com', '0812345678', 'active')
    RETURNING id
)

INSERT INTO user_credentials (user_id, password_hash, pin_hash)
SELECT id, 'Password', 'Pin'
FROM new_user;

-- 02 Login user

SELECT username, email
FROM users u
JOIN user_credentials uc
    ON u.id = uc.user_id
WHERE email = 'andi@example.com' AND password_hash = 'hash_password_andi' AND pin_hash = 'hash_pin_andi' AND status = 'active';

-- 03 Get user information (username, email, photo)

SELECT username, email, photo_url
FROM users
WHERE id = 1;

-- 04 Check user pin

SELECT user_id, pin_hash
FROM user_credentials
WHERE user_id = 1 -- pin andi

-- 05 Get transaction history

SELECT t.transaction_code, t.type, t.amount, t.status, t.description, t.created_at
FROM transactions t
WHERE t.sender_wallet_id = 1 OR t.receiver_wallet_id = 1
ORDER BY t.created_at DESC;

-- 06 Get user history (income/expense, date range)

-- Income

SELECT t.transaction_code, t.amount, t.description, t.created_at
FROM transactions t
WHERE t.receiver_wallet_id = 1 AND status = 'success' AND created_at BETWEEN '2026-01-01' AND '2027-01-01'
ORDER BY t.created_at DESC;

-- Expense

SELECT t.transaction_code, t.amount, t.description, t.created_at
FROM transactions t
WHERE t.sender_wallet_id = 1 AND status = 'success' AND created_at BETWEEN '2026-01-01' AND '2027-01-01'
ORDER BY t.created_at DESC;

-- 07 Get user information (balance, income, expense)

SELECT w.wallet_number, w.balance, COALESCE(SUM(
    CASE 
        WHEN t.receiver_wallet_id = w.id AND t.status = 'success' THEN t.amount
        ELSE  0
    END
), 0) AS total_income, COALESCE(SUM(
    CASE 
        WHEN t.sender_wallet_id = w.id AND t.status = 'success' THEN t.amount
        ELSE  0
    END
), 0) AS total_expense
FROM wallets w
LEFT JOIN transactions t ON t.sender_wallet_id = w.id OR t.receiver_wallet_id = w.id
WHERE w.id = 1
GROUP BY w.id, w.wallet_number, w.balance;

-- 08 Find receiver with pagination

SELECT receiver_wallet_id, u.name, t.completed_at
FROM transactions t
JOIN wallets w ON t.receiver_wallet_id = w.id
JOIN users u ON w.user_id = u.id
ORDER BY completed_at DESC
LIMIT 5 OFFSET 0;

SELECT receiver_wallet_id, u.name, t.completed_at
FROM transactions t
JOIN wallets w ON t.receiver_wallet_id = w.id
JOIN users u ON w.user_id = u.id
ORDER BY completed_at DESC
LIMIT 5 OFFSET 5;

-- 09 Create transaction/topup

-- Mengurangi saldo pengirim
UPDATE wallets
SET balance = balance - 50000
WHERE id = 1 AND status = 'active' AND balance >= 50000;

-- Menambahkan saldo penerima
UPDATE wallets
SET balance = balance + 50000
where id = 2 AND status = 'active';

-- Catat transaksi
INSERT INTO transactions (
    transaction_code,
    sender_wallet_id,
    receiver_wallet_id,
    amount,
    fee,
    type,
    status,
    description,
    completed_at
) VALUES(
    'TRX-0008',
    1,
    2,
    50000,
    0,
    'transfer',
    'success',
    'Transfer dari Andi ke Budi',
    CURRENT_TIMESTAMP
);

-- Catat detail saldo pengirim
INSERT INTO transaction_details(transaction_id, wallet_id, type, amount, balance_after)
SELECT t.id, w.id, 'debit', 50000, w.balance
FROM transactions t
JOIN wallets w ON w.id = 1
WHERE t.transaction_code = 'TRX-0008';

-- Catat detail saldo penerima
INSERT INTO transaction_details(transaction_id, wallet_id, type, amount, balance_after)
SELECT t.id, w.id, 'credit', 50000, w.balance
FROM transactions t
JOIN wallets w ON w.id = 2
WHERE t.transaction_code = 'TRX-0008';

-- 10 Get user profile (photo, name, phone, email)

SELECT users.name, users.phone, users.email, users.photo_url
FROM users WHERE id = 1;

-- 11 Change PIN

UPDATE user_credentials
SET pin_hash = 'new_pin_hash_andi', pin_changed_at = CURRENT_TIMESTAMP
WHERE user_id = 1 AND pin_hash = 'new_pin_hash'
RETURNING user_id, pin_changed_at

-- 12 Change Password

UPDATE user_credentials
SET password_hash = 'new_password_hash_andi', password_changed_at = CURRENT_TIMESTAMP
WHERE user_id = 1 AND password_hash = 'new_password_hash'
RETURNING user_id, password_changed_at

-- 13 Change user profile

UPDATE users
SET username = 'new_andi', updated_at = CURRENT_TIMESTAMP
WHERE id = 1
RETURNING id, updated_at 
