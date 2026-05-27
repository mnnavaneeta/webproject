#include <iostream>

using namespace std;

class BANK {

    string name;
    int accno;
    float balance;
    float amount;
    int choice;

public:

    BANK() {
        balance = 0;
    }
    void createaccount() {
        cout<<"\nCREATE ACCOUNT\n";
        cout<<"Enter Customer Name: ";
        cin>>name;
        cout<<"Enter Account Number: ";
        cin>>accno;
        cout<<"\nAccount Created Successfully!\n";
    }

    void depositmoney() {
        cout<<"\nEnter Amount to Deposit: ";
        cin>>amount;
        balance=balance+amount;
        cout<<"\nAmount Deposited Successfully!\n";
    }

    void withdrawmoney() {
        cout<<"\nEnter Amount to Withdraw: ";
        cin>>amount;
        if(amount>balance) {
            cout<<"\nInsufficient Balance!\n";
        }
        else {
            balance=balance-amount;
            cout<<"\nWithdrawal Successful!\n";
        }
    }

        void checkbalance() {

        cout<<"\nACCOUNT DETAILS\n";
        cout<<"Customer Name :"<<name<<endl;
        cout<<"Account Number :"<<accno<<endl;
        cout<<"Current Balance :"<<balance<<endl;
    }

    void transactiondetails() {

        cout<<"\nTRANSACTION DETAILS\n";
        cout<<"Customer Name :" <<name<<endl;
        cout<<"Account Number :"<<accno<<endl;
        cout<<"Available Balance :"<<balance<<endl;
    }

    void menu() {

        do {

            cout << "\n1. Create Account";
            cout << "\n2. Deposit Money";
            cout << "\n3. Withdraw Money";
            cout << "\n4. Check Balance";
            cout << "\n5. Transaction Details";
            cout << "\n6. Exit";
            cout << "\nEnter Your Choice: ";
            cin >> choice;

            switch(choice) {

                case 1:
                    createaccount();
                    break;

                case 2:
                    depositmoney();
                    break;

                case 3:
                    withdrawmoney();
                    break;

                case 4:
                    checkbalance();
                    break;

                case 5:
                    transactiondetails();
                    break;

                case 6:
                    cout << "\nThank You!\n";
                    break;

                default:
                    cout << "\nInvalid Choice!\n";
            }

        } while(choice != 6);
    }
};

int main() {
    BANK user;
    user.menu();
    return 0;
}