import type { PeopleData, PersonData } from "../../@types/people";

type PeopleTableProps = { 
  title? : string;
  data : PeopleData;
}
export default function PeopleTable({data, title}: PeopleTableProps){


  return (
    <table>
      {title && (<caption>{title}</caption>)}
      <PeopleTableHeader />
      <tbody>
        {data.map( person => (

          <PeopleTableRow key={person.id} {...person}/>
        ))}

      </tbody>
    </table>
  )
}

function PeopleTableHeader () {
  return (
     <thead>
        <tr>
          <th>Nom complet</th>
          <th>Surnom</th>
          <th>Date de naissance</th>
          <th>Genre</th>
        </tr>
      </thead>
  )
}

type PeopleTableRowPros =  PersonData & {
  onPersonClick?: () => {}
}
function PeopleTableRow({firstname, lastname, nickname, birthDate, gender}: PeopleTableRowPros){
  return (
    <tr>
      <td>{firstname} {lastname}</td>
      <td>{nickname ?? 'N/A'}</td>
      <td>{birthDate.toLocaleDateString('fr-be', {dateStyle: 'long'})}</td>
      <td>{gender}</td>
    </tr>
  )
}