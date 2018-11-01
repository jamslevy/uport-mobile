// Copyright (C) 2018 ConsenSys AG
//
// This file is part of uPort Mobile App.
//
// uPort Mobile App is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// uPort Mobile App is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with uPort Mobile App.  If not, see <http://www.gnu.org/licenses/>.
//
import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

// selectors
import { seedAddresses, hdRootAddress } from 'uPortMobile/lib/selectors/hdWallet'

// Components
import MenuItem from 'uPortMobile/lib/components/shared/MenuItem'

// Utilities
import { colors } from 'uPortMobile/lib/styles/globalStyles'

class SeedAddresses extends React.Component {

  static navigatorStyle = {
    largeTitle: false,
    drawUnderNavBar: true,
    navBarBackgroundColor: colors.brand,
    navBarButtonColor: colors.white,
    navBarTextColor: colors.white,
  }

  render() {
    return (
      <FlatList
        data={this.props.addresses}
        renderItem={({item}) => (
          <MenuItem
            title={item}
            value={item === this.props.root ? '*' : ''}
            />
        )}
        keyExtractor={item => item}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    root: hdRootAddress(state),
    addresses: seedAddresses(state)
  }
}

export default connect(mapStateToProps)(SeedAddresses)
