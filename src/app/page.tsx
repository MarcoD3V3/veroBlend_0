"use client";
import styles from "./homePage.module.scss";
import { NavBar, Footer } from "@/components/";
// import { Disclosures } from "@/components/Disclosures";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const headingTitle = "VeroBlend";
  return (
    <>
      <NavBar />
      <div className={styles.Intro}>
        <div className={styles.containerIntro}>
          <div className={styles.headingIntro}>
            <div className={styles.textHeading}>
              <h5 className={styles.learning}>Learning</h5>
              {headingTitle}
            </div>
            <div className={styles.textLorem}>
              <p>
                Embark on a coding journey with our interactive platform,
                designed to empower learners with comprehensive tutorials and
                resources for mastering programming skills.
              </p>
            </div>
            <div className={styles.buttonsContainer}>
              <Link href="/Courses">
                <button className={styles.coursesButton}>Courses</button>
              </Link>
              <Link href="/Courses/Learn">
                <button className={styles.learnButton}>Learn</button>
              </Link>
            </div>
          </div>
          <div className={styles.imgIntro}>
            <div className={styles.imgContainer}>
              <Image
                src="/logo.png"
                width={460}
                height={460}
                alt="VeroBlend logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.HomePage}>
        {/* <div className={styles.container}>
					<div className={styles.homeIntro}>
						<section className={styles.section}>
							<article id='articleImage' className={styles.articleImage}>
								<Image
									src='/id.png'
									width={400}
									height={400}
									alt='mas'/>
							</article>
							<article id='articleInfo' className={styles.articleInfo}>
								asdasd
							</article>
						</section>
					</div>
				</div> */}
      </div>
      <Footer />
    </>
  );
}
