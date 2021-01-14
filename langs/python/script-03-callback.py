def fire(y,f):
    f(y)
    return y*2

def callback(z):
    print(z)

x=fire(2,callback)
print(x)