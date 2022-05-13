#include <iostream>

using namespace std;

struct MyStruct {
    string foo;
    int bar;
    bool baz;
    unsigned long reallyBigNumber;
};

// this is all i remember of cpp

class MyClass {
    public:
        string name;

        MyClass() {
            this->name = "Bob";
            this->creditCardNumber = 1;
        }

        void legalNameChange(string newName) {
            (*this).name = newName;
        }

    private:
        unsigned long creditCardNumber;
};

int main() {
    char hello[6] = { 'h', 'e', 'l', 'l', 'o', '\0' };

    const short theAnswer = 42;

    cout << "Hello, world!" << endl;
}