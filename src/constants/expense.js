const expense = {
    "users": [
        {
            "id": "1",
            "name": "John Doe",
            "email": "john@example.com",
            "role": "manager",
            "companyId": "1"
        },
        {
            "id": "2",
            "name": "Jane Smith",
            "email": "jane@example.com",
            "role": "employee",
            "companyId": "1"
        },
        {
            "id": "3",
            "name": "Bob Johnson",
            "email": "bob@example.com",
            "role": "manager",
            "companyId": "2"
        }
    ],
    "expenseReports": [
        {
            "id": "1",
            "title": "Business Lunch",
            "description": "Expenses for a client lunch meeting",
            "amount": 50.0,
            "date": "2023-05-22",
            "userId": "1",
            "companyId": "1"
        },
        {
            "id": "2",
            "title": "Office Supplies",
            "description": "Expenses for purchasing office supplies",
            "amount": 100.0,
            "date": "2023-05-23",
            "userId": "2",
            "companyId": "1"
        },
        {
            "id": "3",
            "title": "Travel Expenses",
            "description": "Expenses for a business trip",
            "amount": 500.0,
            "date": "2023-05-20",
            "userId": "3",
            "companyId": "2"
        }
    ],
    "companies": [
        {
            "id": "1",
            "name": "ABC Company"
        },
        {
            "id": "2",
            "name": "XYZ Corporation"
        }
    ]
}

const expenseData = [
    {
        type: "in",
        title: "salary",
        amount: 13786
    },
    {
        type: "out",
        title: "King Price Insurance",
        amount: 2198.11,
        date: "00/00/0000",
        category: "Car Fianance",
    },
    {
        type: "out",
        title: "Tracker",
        amount: 214.72,
        date: "00/00/0000",
        category: "Car Fianance",
    },
    {
        type: "out",
        title: "Stokvel",
        amount: 500,
        date: "00/00/0000",
        category: "Savings",
    },
    {
        type: "out",
        title: "Netflix",
        amount: 200,
        date: "00/00/0000",
        category: "Entertainment",
    }
]

export  { expense, expenseData };