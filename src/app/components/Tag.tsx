import React from 'react'
import Link from 'next/link'

function Tag() {
  return (
    <>
      <div className="mb-8 bg-background p-10">
              <h3 className="text-xl font-bold border-b pb-2 mb-4">
                Tag Cloud
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="bg-white border px-3 py-1 text-sm text-gray-600"
                >
                  Project
                </Link>
                <Link
                  href="#"
                  className="bg-white border px-3 py-1 text-sm text-gray-600"
                >
                  Technology
                </Link>
                <Link
                  href="#"
                  className="bg-white border px-3 py-1 text-sm text-gray-600"
                >
                  Travel
                </Link>
                <Link
                  href="#"
                  className="bg-white border px-3 py-1 text-sm text-gray-600"
                >
                  design
                </Link>
                <Link
                  href="#"
                  className="bg-white border px-3 py-1 text-sm text-gray-600"
                >
                  illustration
                </Link>
                {/* Add more tags */}
              </div>
            </div>
    </>
  )
}

export default Tag
