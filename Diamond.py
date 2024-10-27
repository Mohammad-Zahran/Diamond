n = int(input("Enter the number of rows: "))  

space = n - 1

# Upper part of the diamond
for i in range(1, n + 1):
    for j in range(1, space + 1):
        print(" ", end="") 
    space-=1
    for j in range(1, 2 * i):
        print("*", end="") 
    print("")

space = 1

# Lower part of the diamond
for i in range(1, j): 
    for j in range(i, space+1):
        print(" ", end="")
    space+=1
    for j in range(1, 2 * (n - i)):
        print("*", end="") 
    print("")