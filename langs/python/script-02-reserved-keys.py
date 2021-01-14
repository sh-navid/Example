def log(key,test):
    print("*"*20)
    print("Key: "+key)
    print("Test: " + test)

#and
log("and",(str)(1 and 1))

#assert
#assert 1!=1
assert 1==1
log("assert","If True nothing happens, but if false Assertion Error happens - Code Halts")

#break, continue
for x in range(1,10):
    if x<5:
        continue;
    if x==5:
        log("break, continue",(str)(x))
        break

#class
class c:
    val=13
    def __init__(self,val):
        self.val=val

    def inc(self):
        self.val+=1

    def show(self):
        return self.val;

ci= c(14)
ci.inc()
log("class",(str)(ci.val))