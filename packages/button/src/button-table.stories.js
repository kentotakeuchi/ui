import Table from './button-table'
import Button from './button'

export default {
  component: ButtonTable,
  title: 'Demo/ButtonTable'
}

export const ButtonTable = () => {
  return (
    <Table cellSpacing={0} cellPadding={0}>
      <tr>
        <th></th>
        <th>Fill</th>
        <th>Outline</th>
        <th>Ghost</th>
      </tr>
      <tr>
        <td>Small</td>
        <td>
          <Button size='small' variant='fill'>
            Button
          </Button>
        </td>
        <td>
          <Button size='small' variant='outline'>
            Button
          </Button>
        </td>
        <td>
          <Button size='small' variant='ghost'>
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Medium</td>
        <td>
          <Button size='medium' variant='fill'>
            Button
          </Button>
        </td>
        <td>
          <Button size='medium' variant='outline'>
            Button
          </Button>
        </td>
        <td>
          <Button size='medium' variant='ghost'>
            Button
          </Button>
        </td>
      </tr>
      <tr>
        <td>Large</td>
        <td>
          <Button size='large' variant='fill'>
            Button
          </Button>
        </td>
        <td>
          <Button size='large' variant='outline'>
            Button
          </Button>
        </td>
        <td>
          <Button size='large' variant='ghost'>
            Button
          </Button>
        </td>
      </tr>
    </Table>
  )
}
