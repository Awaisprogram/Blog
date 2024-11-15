import React from "react";
import Link from "next/link";
import { WiDirectionRight, WiDirectionLeft } from "react-icons/wi";

function Pre() {
  return (
    <div>
      <div className="mt-8 px-24 flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex items-center space-x-2">
            <li>
            <Link href='./blogs'>
              <button className="px-4 py-4
              rounded-full bg-gray-200 text-black rounded-r hover:bg-black hover:text-white transition ease-in-out">
              <WiDirectionLeft 
              size={20}/>
              </button>
              </Link>
            </li>
            <li>
              <Link href='./blog-1'>
              <button className="px-6 py-4 bg-gray-200 rounded-full text-black hover:bg-black hover:text-white transition ease-in-out">1</button>
              </Link>
            </li>
            <li>
            <Link href='./blog-2'>
              <button className="px-6 py-4
              rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition ease-in-out">2</button>
              </Link>
            </li>
            <li>
            <Link href='./blog-3'>
              <button className="px-6 py-4
              rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition ease-in-out">3</button>

              </Link>
            </li>
            <li>
            <Link href='./blog-4'>
              <button className="px-6 py-4
              rounded-full bg-gray-200 text-black hover:bg-black hover:text-white transition ease-in-out">4</button>
              </Link>
            </li>
            <li>
              <Link href='blog-5'>
              <button className="px-4 py-4
              rounded-full bg-gray-200 text-black rounded-l hover:bg-black hover:text-white transition ease-in-out">
                <WiDirectionRight
                size={20}/>
              </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pre;
