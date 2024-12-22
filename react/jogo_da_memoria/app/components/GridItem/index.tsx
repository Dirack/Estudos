import { GridItemType } from '@/app/types/GridItem'
import * as C from './styles'
import b7svg from '../../svgs/b7.svg'
import Image from 'next/image';
import { items } from '@/app/data/items';

type Props = {
    item: GridItemType;
    onClick: ()=>void;
}

export const GridItem = ({item,onClick}: Props)=>{
    return (
        <C.Container
            $showbackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {item.permanentShown === false && item.shown === false &&
                <C.Icon opacity={.1}>
                    <Image src={b7svg} alt="" />
                </C.Icon>
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon>
                    <Image src={items[item.item].icon} alt='' />
                </C.Icon>
            }
        </C.Container>
    )
}