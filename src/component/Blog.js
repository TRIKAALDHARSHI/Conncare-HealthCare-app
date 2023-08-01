import React from "react";
import Blogcard from "./Blogcard";
import { Link } from "react-router-dom";
import "./Blog.css";
function Blog() {
  return (
    <>
      <div className="blog-card-container">
        <div className="blog-header">
          <h2>ConnCare - For self Care</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            itaque suscipit eveniet porro, soluta a
          </p>
        </div>
        <div className="blog-card-main">
          <Link to='https://www.healthline.com/health/cold-flu/cold'>
            <Blogcard
              image={
                "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/320099_2200-1200x628.jpg"
              }
              card_head={"Common Cold"}
              card_para={
                "The common cold, also known as a viral upper respiratory infection, can cause a variety of symptoms that typically affect the nose, throat, and sinuses..."
              }
            />
          </Link>
          <Blogcard
            image={
              "https://www.justicepays.com/blogmin/wp-content/uploads/2020/07/3-things-you-need-to-do-after-experiencing-a-dog-bite.jpg"
            }
            card_head={"Rabies"}
            card_para={
              "TRabies is a viral infection that affects the central nervous system and is transmitted to humans through the bite or scratch of an infected animal..."
            }
          />
          <Blogcard
            image={
              "https://domf5oio6qrcr.cloudfront.net/medialibrary/7813/a83db567-4c93-4ad0-af6f-72b57af7675d.jpg"
            }
            card_head={"Depression"}
            card_para={
              "The symptoms of depression can vary in severity and duration, and not everyone with depression will experience all of the symptoms..."
            }
          />
          <Blogcard
            image={
              "https://www.kidshealth.org.nz/sites/kidshealth/files/taxonomy/Child%20with%20cancer%2023305832_l.jpg"
            }
            card_head={"Cancer"}
            card_para={
              "Cancer symptoms can vary depending on the type of cancer, its stage, and other factors. ..."
            }
          />
          <Blogcard
            image={
              "https://onemg.gumlet.io/a_ignore,w_1080,h_672,c_fit,q_auto,f_auto/diimgcz3oosvc9zdh9mt.jpg"
            }
            card_head={"Typhoid"}
            card_para={
              "Typhoid fever, caused by the bacterium Salmonella enterica serovar Typhi, can cause a variety of symptoms that typically develop gradually and can vary in severity...."
            }
          />
          <Blogcard
            image={
              "https://m.economictimes.com/thumb/msid-96323345,width-1200,height-630,resizemode-4,imgsize-52674/what-is-the-difference-between-zika-virus-dengue-chikungunya-know-symptoms.jpg"
            }
            card_head={"Dengue Fever"}
            card_para={
              "Dengue fever is a viral illness caused by the dengue virus, which is transmitted to humans through the bite of infected Aedes mosquitoes..."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Blog;
