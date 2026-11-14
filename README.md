# FilCycle

**Plastic Recycling Vending Machine with Reward-Based Incentive System**

A full-stack recycling management platform for **Filamer Christian University (FCU)**, built as a BSCS thesis prototype. FilCycle enables students to recycle plastic bottles through IoT-enabled vending machines and earn redeemable reward points.

> Recycle Smart. Earn Rewards. Protect Tomorrow.

## Tech Stack

| Layer         | Technology                                                           |
| ------------- | -------------------------------------------------------------------- |
| Frontend      | Next.js 15, React, TypeScript, TailwindCSS, shadcn/ui, Framer Motion |
| Backend       | Next.js API Routes, Prisma ORM                                       |
| Database      | MySQL                                                                |
| Auth          | NextAuth (JWT, Role-Based, Email OTP)                                |
| Charts        | Recharts                                                             |
| Notifications | Sonner                                                               |

## Features

- **Role-based dashboards** — Administrator, Staff, Student
- **Bottle submission simulation** — Hardware abstraction layer for future IoT integration
- **Reward catalog & redemption** — Coffee vouchers, merchandise, cash, gift cards
- **Leaderboard** — Weekly, monthly, all-time with animated podium
- **Achievements** — Unlock badges for recycling milestones
- **Reports** — Export to PDF, Excel, CSV
- **Machine monitoring** — Simulated IoT dashboard
- **Notifications** — Real-time activity alerts
- **Dark/Light mode** — Modern SaaS UI with glassmorphism

## Prerequisites

- Node.js 18+
- MySQL (XAMPP recommended)
- npm

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and update if needed:

```env
DATABASE_URL="mysql://root:@localhost:3306/filcycle"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
JWT_SECRET="your-jwt-secret"

# Email OTP (mock = OTP printed in server console; smtp = real email)
EMAIL_PROVIDER="mock"
# SMTP_HOST="smtp.gmail.com"
# SMTP_PORT="587"
# SMTP_USER="your@gmail.com"
# SMTP_PASS="your-app-password"
# SMTP_FROM="FilCycle <noreply@filamer.edu>"
```

Test email: `node scripts/check-email.mjs` then `node scripts/test-email.mjs your@email.com`

### 3. Start MySQL

Start MySQL via XAMPP Control Panel, then create the database:

```sql
CREATE DATABASE filcycle CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 4. Run migrations and seed

For a fresh database, run setup:

```bash
npm run db:setup
```

The integer-key schema is not compatible with databases created using the old
string IDs. For a development database, back it up and run `npm run db:reset`
to rebuild and reseed it. This command permanently deletes the existing data;
do not use it on a database that must be preserved.

### 5. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

| Role          | Login             | Password   |
| ------------- | ----------------- | ---------- |
| Administrator | admin@filamer.edu | admin123   |
| Staff         | staff@filamer.edu | staff123   |
| Student       | 21-CCS1-0001      | student123 |

Students login with **Student ID** (not email).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── admin/              # Administrator dashboard
│   ├── staff/              # Staff dashboard
│   ├── student/            # Student dashboard
│   └── api/                # REST API endpoints
├── components/
│   ├── ui/                 # Reusable UI components (shadcn-style)
│   ├── dashboard/          # Dashboard-specific components
│   ├── charts/             # Recharts wrappers
│   └── layout/             # Layout components
├── lib/
│   ├── hardware/           # IoT hardware abstraction (simulated)
│   ├── services/           # Business logic
│   ├── auth.ts             # NextAuth configuration
│   └── validations.ts      # Zod schemas
└── prisma/
    ├── schema.prisma       # Database schema
    └── seed.ts             # Seed data
```

## Hardware Integration (Future)

The `src/lib/hardware/` module provides interfaces ready for:

- NFC card readers
- Arduino Mega / ESP32
- IR sensors, load cells, ultrasonic sensors
- Material detection sensors

Replace `Simulated*` classes with real device drivers without changing the application layer.

## API Endpoints

| Method       | Endpoint               | Description                   |
| ------------ | ---------------------- | ----------------------------- |
| POST         | `/api/bottles/submit`  | Submit a bottle for recycling |
| GET          | `/api/dashboard/stats` | Admin dashboard statistics    |
| GET          | `/api/leaderboard`     | Leaderboard data              |
| GET/POST/PUT | `/api/rewards`         | Reward catalog & redemption   |
| GET          | `/api/transactions`    | Transaction history           |
| GET/PUT/POST | `/api/machine`         | Machine monitoring            |
| GET/PUT      | `/api/notifications`   | User notifications            |
| GET          | `/api/reports`         | Generate reports              |
| GET/POST     | `/api/students`        | Student management            |

## License

Academic thesis project — Filamer Christian University. Not for commercial use.
