import { TabProps } from '@/Interfaces/GlobalInterfaces';

function TabTitle({
  id,
  title,
  activeTab,
  setActiveTab,
  activeClass,
  notActiveClass,
  icon,
}: TabProps) {
  const handTabSwitch = (id: string) => {
    if (setActiveTab) {
      setActiveTab(id);
    }
  };

  return (
    <li
      key={id}
      onClick={() => handTabSwitch(id)}
      className={activeTab === id ? activeClass : notActiveClass}
    >
      <hgroup id={id} className={icon ? 'flex gap-3 items-center' : ''}>
        {icon && <h4 className=''>{icon}</h4>}
        <h4>{title}</h4>
      </hgroup>
    </li>
  );
}

export default TabTitle;
