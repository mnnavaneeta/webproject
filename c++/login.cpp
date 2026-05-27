
#include <iostream>
#include <fstream>
#include <string>

using namespace std;

class LOGIN{

    string username,password;
    string u,p;
    int choice;
    bool found;

public:

    void registeruser() {

        found=false;
        cout<<"\nREGISTER\n";
        cout<<"Create Username:";
        cin>>username;
        cout<<"Create Password:";
        cin>>password;
        ifstream read("users.txt");
        while(read>>u>>p) {
            if(u==username) {
                found = true;
                break;
            }
        }
        read.close();
        if(found){
            cout << "\nUsername already exists!\n";
        }
        else {
            ofstream file("users.txt", ios::app);
            file << username<< " "<<password<<endl;
            file.close();
            cout <<"\nRegistration Successful!\n";
        }
    }
    void login() {

        found = false;
        cout << "\nLOGIN\n";
        cout << "Enter Username: ";
        cin >> username;
        cout << "Enter Password: ";
        cin >> password;
        ifstream file("users.txt");
        while(file>>u>>p) {
            if(u == username && p == password) {
                found = true;
                break;
            }
        }
        file.close();

        if(found) {
            cout << "\nWelcome " << username << endl;
            cout << "Login Successful!\n";
        }
        else {
            cout << "\nInvalid Username or Password!\n";
        }
    }

    void menu() {

        do {

            cout << "\n1. Register";
            cout << "\n2. Login";
            cout << "\n3. Exit";
            cout << "\nEnter Choice: ";
            cin >> choice;

            switch(choice) {
                case 1:
                    registeruser();
                    break;
                    
                case 2:
                    login();
                    break;

                case 3:
                    cout << "\nThank You!\n";
                    break;

                default:
                    cout << "\nInvalid Choice!\n";
            }

        }while(choice != 3);
    }
};

int main() {
    LOGIN USERS;
    USERS.menu();
    return 0;
}