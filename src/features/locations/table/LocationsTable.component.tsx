import { FC } from 'react';
import { Location } from 'features/locations';
import Table from 'features/styles/table.styles';

type LocationsTableProps = {
  locations: Location[];
};

const LocationsTable: FC<LocationsTableProps> = ({ locations }: LocationsTableProps) => (
  <Table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>Dimension</th>
        <th># of Characters</th>
      </tr>
    </thead>
    <tbody>
      {locations.map((location) => (
        <tr key={location.id}>
          <td>#{location.id}</td>
          <td>{location.name}</td>
          <td>{location.type}</td>
          <td>{location.dimension}</td>
          <td>{location.residents.length}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default LocationsTable;
