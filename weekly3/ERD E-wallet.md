# ERD E-wallet
``` mermaid
erDiagram

    USERS ||--O{ USER_CREDENTIALS: "memiliki"
    USERS ||--O{ WALLETS: "memliki"
    USERS ||--O{ SESSIONS: "membuka"
    WALLETS ||--O{ TRANSACTIONS: "mengirim"
    WALLETS ||--O{ TRANSACTIONS: "menerima"
    TRANSACTIONS ||--O{ TRANSACTION_DETAILS: "memiliki"
    WALLETS ||--O{ TRANSACTION_DETAILS: "mempengaruhi"
    USERS ||--O{ PAYMENT_METHODS: "menggunakan"

    USERS {
        int id PK
        string name
        string username UK
        string email UK
        int phone UK
        text photo_url
        string status
        date created_at
        date updated_at
    }

    USER_CREDENTIALS {
        int user_id FK
        string password_hash
        int pin_hash
        date password_changed_at
        date pin_changed_at
    }

    WALLETS {
        int id PK
        int user_id FK
        string wallet_number UK
        int balance
        string currency
        string status
        date created_at
    }

    SESSIONS {
        int id PK
        int user_id FK
        string token_hash UK
        date created_at
        date expired_at
        date revoked_at
    }

    TRANSACTIONS {
        int id PK
        string transaction_code UK
        int sender_wallet_id FK
        int receiver_wallet_id FK
        int payment_method_id FK
        int amount
        int fee
        string type
        string status
        text description
        date created_at
        date completed_at
    }

    TRANSACTION_DETAILS {
        int id PK
        int transaction_id FK
        int wallet_id
        string type
        int amount
        int balance_after
        date created_at
    }

    PAYMENT_METHODS {
        int id PK
        int user_id FK
        string provider
        string external_reference
        string status
        date created_at
    }
```