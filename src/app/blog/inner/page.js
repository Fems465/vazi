import Header from "@/components/Header";
import Link from "next/link";

export default function InnerBlog() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="py-28">
        <div>
          <div className="container">
            <div className=" max-w-[50rem] mx-auto px-7 lg:px-0">
              <Link
                href={"/blog"}
                className="inline-flex place-items-center text-sm lg:text-sm gap-x-1"
              >
                {" "}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5.25C11.4142 5.25 11.75 5.58579 11.75 6C11.75 6.41421 11.4142 6.75 11 6.75L11 5.25ZM0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403805 6.01041 0.403805 6.3033 0.696699C6.59619 0.989592 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM11 6.75L1 6.75L1 5.25L11 5.25L11 6.75Z"
                    fill="#7B7B7B"
                  />
                </svg>
                Blog
              </Link>

              <div className="w-full rounded-lg h-[15rem] lg:h-[18rem] border mt-7 flex items-end px-7 lg:px-9 py-6 lg:py-8">
                <div>
                  <h2 className="text-xl lg:text-3xl font-semibold">
                    How to create a Cap Table.
                  </h2>
                  <div className="flex gap-x-2 text-xs lg:text-sm lg:mt-1.5">
                    <p className="font-semibold">2 Aug, 2023</p>
                    <p className="text-cgray">Startup guide</p>
                  </div>
                </div>
              </div>
              <div className="mt-14 text-sm px-2 text-[#4D747A] leading-loose">
                <p className=" ">
                  A cap table (or capitalization table) is a financial snapshot
                  of the company created using a spreadsheet that outlines the
                  ownership stakes and the distribution of shares among the
                  founders and investors. It tracks the equity ownership and
                  value of each participant in the business, and if not
                  correctly prepared, company executives and shareholders may
                  experience hitches based on ownership stakes and concerns as
                  the company evolves. <br /> <br />
                  Initially, founders contribute their personal funds and assets
                  to establish a company through a process popularly known as
                  bootstrapping, and the cap table at this stage is rarely
                  complicated. Illustratively, let’s say there are three
                  friends, Alice, Bob, and Charlie, who decided to create a
                  startup. Alice invests $50,000, Bob invests $30,000, and
                  Charlie invests $20,000.
                  <br /> <br />
                  To reflect the ownership distribution, the cap table will show
                  shares of just these three individuals. In this example, where
                  a share is worth $1, Alice will be assigned 50,000 shares, Bob
                  will receive 30,000, and Charlie will get 20,000. These
                  numbers are proportionate to the amount of money they invested
                  and will be reflected in the cap table.
                  <br /> <br />
                  However, the more the company gets investments, the more the
                  cap table is updated, and if not carefully crafted may become
                  complicated to understand. Hence, this article delves into the
                  steps to create an efficient cap table so you can do the same
                  for your company.
                </p>
                <p className="mt-12">
                  <strong>Cap Table Components</strong>
                  <br />
                  <br />
                  Developing a comprehensive cap table for a company relies on
                  precisely delineating essential data. Primarily, the cap table
                  is designed to articulate the ownership rights within a
                  company, requiring the inclusion of variables that
                  systematically furnish ownership information. These variables
                  include:
                </p>
                <ul className=" list-disc ">
                  <li>
                    <strong>Shareholder Name:</strong> The names or unique
                    identifiers of individuals or entities holding shares in the
                    company.
                  </li>

                  <li>
                    <strong>Share Class:</strong> The different classes of
                    shares issued by the company, such as common shares,
                    preferred shares, or different series of preferred shares.
                  </li>

                  <li>
                    <strong>Number of Shares:</strong> The number of shares each
                    shareholder holds in a specific share class.
                  </li>

                  <li>
                    <strong>Ownership Percentage:</strong> A cap table must
                    include the percentage of total shares owned by each
                    shareholder, calculated by dividing their total number by
                    the total outstanding shares.
                  </li>

                  <li>
                    <strong>Equity Investments:</strong> The amount of money
                    invested by each shareholder to acquire their shares.
                  </li>

                  <li>
                    <strong>Vesting Schedule: </strong> If applicable, the
                    timeline or conditions under which shares granted to
                    employees or founders become fully owned by them.
                  </li>
                </ul>

                <p className="mt-12">
                  <strong>Cap Table Components</strong>
                  <br />
                  <br />
                  Developing a comprehensive cap table for a company relies on
                  precisely delineating essential data. Primarily, the cap table
                  is designed to articulate the ownership rights within a
                  company, requiring the inclusion of variables that
                  systematically furnish ownership information. These variables
                  include:
                </p>
                <ul className=" list-disc ">
                  <li>
                    <strong>Shareholder Name:</strong> The names or unique
                    identifiers of individuals or entities holding shares in the
                    company.
                  </li>

                  <li>
                    <strong>Share Class:</strong> The different classes of
                    shares issued by the company, such as common shares,
                    preferred shares, or different series of preferred shares.
                  </li>

                  <li>
                    <strong>Number of Shares:</strong> The number of shares each
                    shareholder holds in a specific share class.
                  </li>

                  <li>
                    <strong>Ownership Percentage:</strong> A cap table must
                    include the percentage of total shares owned by each
                    shareholder, calculated by dividing their total number by
                    the total outstanding shares.
                  </li>

                  <li>
                    <strong>Equity Investments:</strong> The amount of money
                    invested by each shareholder to acquire their shares.
                  </li>

                  <li>
                    <strong>Vesting Schedule: </strong> If applicable, the
                    timeline or conditions under which shares granted to
                    employees or founders become fully owned by them.
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <div className="flex gap-x-4 mb-2 text13 text-[#9C9C9C]">
                  <p>2 Aug, 2023</p>
                  <p>03:08 pm</p>
                  <p>No comments</p>
                </div>
                <div className=" mx-auto px-8 py-7  bg-[#F1F1F1] rounded-xl max-w-full">
                  <div className="flex justify-between"></div>
                  <h2 className="text-xl lg:text-2xl text-[#4A4C4D] font-bold mb-5 px-5">
                    Add a Comment
                  </h2>
                  <form className="text-[#BBBBBB]">
                    <div>
                      <textarea
                        className="py-2.5 px-5 w-full h-[12rem] resize-none  rounded-lg text-[0.8rem] mb-3"
                        placeholder="Your comment"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        className="w-full text-sm px-5 rounded-lg py-2.5 mb-3 text-[0.8rem]"
                        name=""
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="w-full text-sm px-5 rounded-lg py-2.5 mb-1 text-[0.8rem]"
                        required
                        placeholder="Email address"
                        name=""
                      />
                    </div>
                  </form>
                  <small className="px-5 text-xs text-[#BBBBBB] ">
                    Your email address{" "}
                    <span className="text-semibold">will not be</span> published
                  </small>
                  <div className="flex gap-x-1 px-5 mt-2">
                    <input
                      className="text-[#1193A9]"
                      type="checkbox"
                      id="check"
                      name="blogcheckprompt"
                      value="yes"
                    />
                    <label htmlFor="check" className="text-xs text-[#1193A9]">
                      {" "}
                      Save my name and email in this browser for the next time I
                      comment.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
