
#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <string>
int main(){
    char com[30];
    int i=2,a=0;
    printf("entert the comment!!");
    get(com);
    if(com[0]=='/'){
        if(com[1]=='/')
        printf("it is a single line comment");
        else if(com[1]=='*')
        {
            for (i=2; i<=30;i++){
                if(com[i]=='*' && com[i+1]=='/'){
                    printf("\n it is a multiple line comment");
                    a=1;
                    break;
                }
                else
                continue;
            }
            if(a==0)
            printf("\n it is not comment");
        }
        else
        printf("\n it is not comment");
    }
    else
    printf("it is not comment");
}
                
            
    
    
/*}
int main() {
    // Write C++ code here
    std::cout << "Try programiz.pro";

    return 0;
}
*/