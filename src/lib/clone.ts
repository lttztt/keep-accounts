export default function clone(data: any){
  return JSON.parse(JSON.stringify(data))
}
