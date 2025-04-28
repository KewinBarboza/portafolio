import { PDFDownloadLink } from '@react-pdf/renderer'
import { MyCv } from './my-cv'

export const BtnDownloadCv = () => (
  <PDFDownloadLink type="button" document={<MyCv />} fileName="kewin-barboza-cv.pdf" className="text-gray-100 dark:text-gray-900 bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
    {() => 'Descargar CV'}
  </PDFDownloadLink>
)
