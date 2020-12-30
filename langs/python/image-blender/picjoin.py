from PIL import Image 
from PIL import ImageDraw
from PIL import ImageChops
from PIL import ImageFilter

import os


def load_images_from_folder(folder): 
        images = [] 
        for filename in os.listdir(folder): 
            img = Image.open(os.path.join(folder,filename)) 
            images.append(img) 
        return images 


images=load_images_from_folder("images")
w, h = images[0].size

result = Image.new('RGB', (w, h),(255,255,255))

off=0;
l=len(images)
ww=int(w/l)


for img in images:
    #if off==0:
        #result=img.copy()
    
    ll=int(off*ww)
    area = (ll, 0, ll+ww, h) 
    
    mask_im = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask_im)
    draw.rectangle(area, fill=255)
    
    mask_im_blur = mask_im.filter(ImageFilter.GaussianBlur(300))#50, 180
    
    #mask_im_blur.show()
    
    #result.paste(img, (0, 0), mask_im)
    result.paste(img, (0, 0), mask_im_blur)
    off+=1

result.save("image.png", "PNG")
result.show()