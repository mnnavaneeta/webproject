#include <iostream>
using namespace std;
class CGPA{
    int sub;
    float grade[10],credit[10],tcredits,tgpnt;
    float cgpa;
public:
    CGPA(){
        tcredits=0;
        tgpnt=0;
    }
    void input(){
      cout<<"enter number of subjects:";
      cin>>sub;
      for(int i=1;i<=sub;i++){
        cout<<"\nsubject:"<<i<<endl;
        cout<<"enter grade:";
        cin>>grade[i];
        cout<<"enter credit hours:";
        cin>>credit[i];
        tgpnt+=grade[i]*credit[i];
        tcredits+=credit[i];
      }
    }
    void calculate(){
        cgpa=tgpnt/tcredits;
    }
    void display(){
        for(int i=0;i<sub;i++){
            cout<<"\nSubject"<<i+1;
            cout<<"\nGrade:"<<grade[i];
            cout<<"\nCredits:"<<credit[i]<<endl;
        }

        cout << "\nTotal Credits = " << tcredits<< endl;
        cout << "Total Grade Points = " << tgpnt<<endl;
        cout << "CGPA = " << cgpa << endl;
    }
};
int main(){
    CGPA student;
    student.input();
    student.calculate();
    student.display();
    return 0;
}