import { AlertMessage } from '../src/alert';
import { ProgressBar } from '../src/progress';
import { Tab, Tabs } from '../src/tabs';

export default function App() {
  return (
    <>
      <div class='max-w-4xl min-h-screen mx-auto flex flex-col'>
        <div class='my-auto py-[100px] border border-solid border-gray-500 rounded-3xl flex flex-col flex-wrap items-center justify-center gap-2'>
          <AlertMessage message='Hello World...' closeable={false} />
          <AlertMessage message='Hello World...' closeable={true} />
          <ProgressBar value={20} label='Progress' />
          <Tabs label='tabs' color='info'>
            <Tab label='Tab 1' value='1'>
              Tab 1
            </Tab>
            <Tab label='Tab 2' value='2'>
              Tab 2
            </Tab>
            <Tab label='Tab 3' value='3'>
              Tab 3
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
